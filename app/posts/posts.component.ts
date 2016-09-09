
import {Component, OnInit} from "angular2/core";
import {PostsService} from "./posts.service";
import {HTTP_PROVIDERS} from "angular2/http";


@Component({
    selector: 'my-posts',
    templateUrl:"app/posts/posts.html",
    directives: [],
    providers: [PostsService, HTTP_PROVIDERS]
})

export class PostsComponent implements OnInit{
    constructor(private _postsService: PostsService){}

    // define a client side local array to hold retrieved posts
    private _posts = [];

    ngOnInit(){
        this._postsService.getAllPosts()
            .subscribe(posts =>{
                console.log(posts);
                this._posts = posts;
            });
    }
}

