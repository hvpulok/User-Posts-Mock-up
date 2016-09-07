
import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";
import {InputValidators} from "./inputValidators";

@Component({
    selector: 'add-user',
    templateUrl:"app/users/new/adduser.html",
    providers: [],
})

export class AddUserComponent {
    addUserForm: ControlGroup;

    constructor(fb: FormBuilder){
        this.addUserForm = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                InputValidators.cannotContainSpace,
            ])],
            email: ['', Validators.compose([
                Validators.required,
                InputValidators.isEmail,
            ])],
        });
    }

    addUser(){
        console.log(this.addUserForm.value)
    }

}

