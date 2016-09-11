import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    //definition of URL from which fake user posts will be retrieved
    private _url: string = "https://jsonplaceholder.typicode.com/posts";
    private _commentUrl: string = "";
    private _selectedUserPostsUrl: string = "";

    // define http service constructor
    constructor(private _http:Http){}

    //define method to get posts from server
    getPosts(filter?){
        if(filter){
            if(filter.userId == "all"){
                return this._http.get(this._url)
                    .map(res=> res.json());
            }
            else if(filter.userId!= "9999"){
                // https://jsonplaceholder.typicode.com/posts?userId=1
                this._selectedUserPostsUrl = "https://jsonplaceholder.typicode.com/posts?userId="+filter.userId;
                return this._http.get(this._selectedUserPostsUrl)
                    .map(res=> res.json());
            }
        }
        else{
            return this._http.get(this._url)
                .map(res=> res.json());
        }
}

    getAllRelatedComments(postID){
        // commentUrl = "https://jsonplaceholder.typicode.com/posts/:postID/comments";
        this._commentUrl = "https://jsonplaceholder.typicode.com/posts/"+postID+"/comments";
        return this._http.get(this._commentUrl)
            .map(res=> res.json());
    }

}