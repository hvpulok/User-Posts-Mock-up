
import {Component} from "angular2/core";
import {UsersService} from "./users.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-users',
    templateUrl:"app/users/users.html",
    directives: [ROUTER_DIRECTIVES],
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

