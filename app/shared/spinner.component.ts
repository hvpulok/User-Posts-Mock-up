import {Component} from "angular2/core";

@Component({
    selector: 'spinner',
    template:`
        <span>
            <i class="fa fa-spinner fa-spin fa-1x" aria-hidden="true"></i>
            loading...
        </span>
`
})

export class SpinnerComponent{

}