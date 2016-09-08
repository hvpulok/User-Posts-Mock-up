
import {Component, OnInit} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";
import {Router, RouteParams} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

import {InputValidators} from "./inputValidators";
import {UsersService} from "../users.service";
import {User} from "../user";

@Component({
    selector: 'add-user',
    templateUrl:"app/users/new/adduser.html",
    providers: [UsersService, HTTP_PROVIDERS],
})

export class AddUserComponent implements OnInit{
    addUserForm: ControlGroup;
    user = new User("","","","","","","");

    title = "Add New User Information"

    constructor(fb: FormBuilder,
                private _usersService: UsersService,
                private _router: Router,
                private _routeParams: RouteParams

    ){
        this.addUserForm = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                InputValidators.cannotContainSpace,
            ])],
            email: ['', Validators.compose([
                Validators.required,
                InputValidators.isEmail,
            ])],
            phone: [],
            // address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            // }),
        });
    }

    ngOnInit(){
        var id = this._routeParams.get("id");
        this.title = id ? "Edit User Information" : "Add New User Information";

        if(!id)
            return;

        this._usersService.getUser(id)
            .subscribe(user => {
                this.user = user;
            }, response => {
                console.log(response);
            })
    }

    save(){
        var result;
        if (this.user.id)
            result = this._usersService.updateUser(this.user);
        else
            result = this._usersService.addUser(this.addUserForm.value);

        result.subscribe(response => {
            console.log(response);
            this._router.navigate(['Users'])
        })
    }

}

