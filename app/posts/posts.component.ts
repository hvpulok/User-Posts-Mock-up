
import {Component, OnInit} from "angular2/core";
import {PostsService} from "./posts.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "../shared/spinner.component";


@Component({
    selector: 'my-posts',
    templateUrl:"app/posts/posts.html",
    directives: [SpinnerComponent],
    providers: [PostsService, HTTP_PROVIDERS],

})

export class PostsComponent implements OnInit{
    constructor(private _postsService: PostsService){}

    // define a client side local array to hold retrieved posts
    private _posts = [];
    private selectedPost: any = "";
    private _relatedComments = "";

    isPostsLoading: boolean = true; //set isPostsLoading to false to show loader icon
    isCommentLoading:boolean= true;
    ngOnInit(){
        this._postsService.getAllPosts()
            .subscribe(posts =>{
                this.isPostsLoading =false;  //set isPostsLoading to false to hide loader icon
                // console.log(posts);
                this._posts = posts;
            });
    }

    showDetails(post){
        // console.log(post.title);
        // store the selected post in local variable
        this.selectedPost = post;
        //get all related comments
        this._postsService.getAllRelatedComments(this.selectedPost.id)
            .subscribe(comments =>{
                this.isCommentLoading =false;  //set isPostsLoading to false to hide loader icon
                this._relatedComments = comments;
            });
    }
}

