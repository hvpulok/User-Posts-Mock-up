
import {Component, OnInit} from "angular2/core";
import {PostsService} from "./posts.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "../shared/spinner.component";
import {UsersService} from "../users/users.service";


@Component({
    selector: 'my-posts',
    templateUrl:"app/posts/posts.html",
    directives: [SpinnerComponent],
    providers: [PostsService, UsersService, HTTP_PROVIDERS],

})

export class PostsComponent implements OnInit{
    constructor(private _postsService: PostsService,
                private _usersService:UsersService
                ){}

    // define a client side local array to hold retrieved posts
    private _posts = [];
    private _users = [];
    private selectedPost: any = "";
    private _relatedComments = "";
    private _pagination;
    private _paginatedPosts = [];
    private _pageNumbers = [];
    private _selectedPageNumber = 1;
    private _pageSize = 10;

    isPostsLoading: boolean = true; //set isPostsLoading to false to show loader icon
    isCommentLoading:boolean= true;
    ngOnInit(){
        this.loadPosts();

        this._usersService.getUsers()
            .subscribe(users =>{
                this._users = users;
            })
    }

    loadPosts(filter?){
        this._posts= null;
        this._paginatedPosts= null;
        this.isPostsLoading= true;
        this._postsService.getPosts(filter)
            .subscribe(posts =>{
                this.isPostsLoading =false;  //set isPostsLoading to false to hide loader icon
                this._posts = posts;
                this.updateCurrentPage();
            });
    }

    updateCurrentPage(selectedPageNumber?){
        this._selectedPageNumber = 1;
        if(selectedPageNumber)
            this._selectedPageNumber = selectedPageNumber;

        this._pagination = this.paginate(this._posts, this._pageSize, this._selectedPageNumber);
        this. _paginatedPosts = this._pagination.paginatedPosts;
        this. _pageNumbers = this._pagination.pageNumbers;
    }

    updatePaginationFilterSize(Filter){
        console.log(Filter);
        console.log(Filter.PaginationFilterSize);
        this._pageSize = Filter.PaginationFilterSize;
        this.updateCurrentPage();
    }

    paginate(allPosts, pageSize? : any, currentPage?: number){
        var totalPostsCount : number = allPosts.length;
        if(!pageSize)
            pageSize =10;
        else if(pageSize==="all")
            pageSize = totalPostsCount;

        if(!currentPage)
            currentPage =1;

        var requiredPageCount: number = Math.ceil(totalPostsCount/pageSize);
        var pageStartIndex = (currentPage-1)*pageSize;
        var pageEndIndex = (currentPage * pageSize);
        var paginatedPosts = allPosts.slice(pageStartIndex, pageEndIndex)
        var pageNumbers :number[] = [];
        for (var i=1; i<=requiredPageCount; i++){
            pageNumbers.push(i);
        }
        return {
            totalPostsCount : totalPostsCount,
            pageSize : pageSize,
            requiredPageCount : requiredPageCount,
            pageStartIndex: pageStartIndex,
            pageEndIndex : pageEndIndex,
            pageNumbers: pageNumbers,
            paginatedPosts : paginatedPosts
        }
    }

    showDetails(post){
        // store the selected post in local variable
        this.selectedPost = post;
        //get all related comments
        this._postsService.getAllRelatedComments(this.selectedPost.id)
            .subscribe(comments =>{
                this.isCommentLoading =false;  //set isPostsLoading to false to hide loader icon
                this._relatedComments = comments;
            });
    }

    showSelectedUsersPosts(filter){
        this.loadPosts(filter);
    }

}

