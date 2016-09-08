
import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";
import {Router} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

import {InputValidators} from "./inputValidators";
import {UsersService} from "../users.service";

@Component({
    selector: 'add-user',
    templateUrl:"app/users/new/adduser.html",
    providers: [UsersService, HTTP_PROVIDERS],
})

export class AddUserComponent {
    addUserForm: ControlGroup;

    constructor(fb: FormBuilder,
                private _usersService: UsersService,
                private _router: Router,

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

    addUser(){
        var result;
        console.log(this.addUserForm.value);

        result = this._usersService.addUser(this.addUserForm.value);

        result.subscribe(feedback => {
            console.log(feedback);
            this._router.navigate(['Users'])

        })
    }

}

