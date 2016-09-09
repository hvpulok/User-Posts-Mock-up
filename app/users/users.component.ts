
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
    isLoading: boolean = true; //set isLoading to false to show loader icon

    ngOnInit(){
        this._usersService.getUsers()
            .subscribe(users=> {
                this.isLoading =false;  //set isLoading to false to hide loader icon
                // console.log(users);
                this._users = users;
            } );
    }

    deleteUser(user){
        var index = this._users.indexOf(user);
        // Here, with the splice method, we remove 1 object
        // at the given index to update the view
        this._users.splice(index, 1);

        this._usersService.deleteUser(user.id)
            .subscribe(null,
                err=> {
                    alert("Could not delete the user");
                    // Revert the view back to its original state
                    // by putting the user object at the index
                    // it used to be.
                    this._users.splice(index, 0, user);
                })

    }

}

