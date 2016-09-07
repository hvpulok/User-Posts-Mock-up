
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";



@Component({
    selector: 'my-navbar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl:"app/navbar/navbar.html",
})

export class NavbarComponent{
    constructor(private _router: Router){
    }

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}

