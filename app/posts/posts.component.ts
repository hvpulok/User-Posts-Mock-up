
import {Component, OnInit} from "angular2/core";
import {PostsService} from "./posts.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "../shared/spinner.component";


@Component({
    selector: 'my-posts',
    templateUrl:"app/posts/posts.html",
    directives: [SpinnerComponent],
    providers: [PostsService, HTTP_PROVIDERS]
})

export class PostsComponent implements OnInit{
    constructor(private _postsService: PostsService){}

    // define a client side local array to hold retrieved posts
    private _posts = [];
    isLoading: boolean = true; //set isLoading to false to show loader icon

    ngOnInit(){
        this._postsService.getAllPosts()
            .subscribe(posts =>{
                this.isLoading =false;  //set isLoading to false to hide loader icon
                // console.log(posts);
                this._posts = posts;
            });
    }
}

