System.register(['angular2/core', "angular2/router", "./navbar/navbar.component", "./posts/posts.component", "./users/users.component", "./home/home.component", "./users/new/adduser.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, posts_component_1, users_component_1, home_component_1, adduser_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (adduser_component_1_1) {
                adduser_component_1 = adduser_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true,
                        }, {
                            path: '/posts',
                            name: 'Posts',
                            component: posts_component_1.PostsComponent,
                        },
                        {
                            path: '/users',
                            name: 'Users',
                            component: users_component_1.UsersComponent,
                        },
                        {
                            path: '/users/:id/edit',
                            name: 'EditUser',
                            component: adduser_component_1.AddUserComponent,
                        },
                        {
                            path: '/users/new',
                            name: 'AddUser',
                            component: adduser_component_1.AddUserComponent,
                        },
                        {
                            path: '/*other',
                            name: 'Other',
                            redirectTo: ['Posts'],
                        },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [
                            router_1.ROUTER_DIRECTIVES, home_component_1.HomeComponent, navbar_component_1.NavbarComponent,
                            posts_component_1.PostsComponent, users_component_1.UsersComponent, adduser_component_1.AddUserComponent,
                        ],
                        template: "\n        <my-navbar></my-navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n        \n        \n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map