import {Component} from 'angular2/core';
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
    selector: 'my-app',
    directives: [NavbarComponent],
    template: `
        <my-navbar></my-navbar>
        <h1>User Posts Mock up</h1>
`,


})
export class AppComponent { }