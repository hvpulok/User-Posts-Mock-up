import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    //definition of URL from which fake user posts will be retrieved
    private _url: string = "https://jsonplaceholder.typicode.com/posts";
    // commentUrl = "https://jsonplaceholder.typicode.com/posts/:postID/comments";
    private _CommentUrl: string = "";

    // define http service constructor
    constructor(private _http:Http){}

    //define method to get posts from server
    getAllPosts(){
        return this._http.get(this._url)
            .map(res=> res.json());
    }

    getAllRelatedComments(postID){
        this._CommentUrl = "https://jsonplaceholder.typicode.com/posts/"+postID+"/comments";
        return this._http.get(this._CommentUrl)
            .map(res=> res.json());
    }
}