
import {Component} from "angular2/core";
import {UsersService} from "./users.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/core";

@Component({
    selector: 'my-users',
    templateUrl:"app/users/users.html",
    providers: [UsersService, HTTP_PROVIDERS],
})

export class UsersComponent implements OnInit{
    constructor(private _usersService: UsersService){

    }
    private _users = [];
    ngOnInit(){
        this._usersService.getUsers()
            .subscribe(users=> {
                // console.log(users);
                this._users = users;
            } );
    }
}

