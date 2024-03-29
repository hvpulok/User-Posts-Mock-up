import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';


@Injectable()
export class UsersService{
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http){

    }
    getUsers(){
        return this._http.get(this._url)
            .map(res=> res.json());
    }

    getUser(id){
        var newUrl = this._url+ "/"+id;
        return this._http.get(newUrl)
            .map(res=> res.json());
    }

    addUser(user){
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }

    updateUser(user){
        var newUrl = this._url+ "/" + user.id;
        return this._http.put(newUrl, JSON.stringify(user))
            .map(res=> res.json());
    }

    deleteUser(id){
        var newUrl = this._url+ "/"+id;
        return this._http.delete(newUrl)
            .map(res=> res.json());
    }
}