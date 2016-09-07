import {Control} from "angular2/common";

export class InputValidators{
    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ')>=0)
            return {cannotContainSpace: true};

        return null;
    }

    static isEmail(control: Control): {[s: string]: boolean}{
        if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
        {
            return {invalidEmail: true};
        }

        return null;
    }
}