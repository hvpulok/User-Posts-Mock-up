import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {NavbarComponent} from "./navbar/navbar.component";
import {PostsComponent} from "./posts/posts.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true,
    },    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent,
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
    },
    {
        path: '/*other',
        name: 'Other',
        redirectTo: ['Posts'],
    },

])


@Component({
    selector: 'my-app',
    directives: [HomeComponent ,NavbarComponent, PostsComponent, UsersComponent, ROUTER_DIRECTIVES],
    template: `
        <my-navbar></my-navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
        
`,


})


export class AppComponent { }