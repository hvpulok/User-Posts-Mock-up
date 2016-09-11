System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PostsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PostsService = (function () {
                // define http service constructor
                function PostsService(_http) {
                    this._http = _http;
                    //definition of URL from which fake user posts will be retrieved
                    this._url = "https://jsonplaceholder.typicode.com/posts";
                    this._commentUrl = "";
                    this._selectedUserPostsUrl = "";
                }
                //define method to get posts from server
                PostsService.prototype.getPosts = function (filter) {
                    if (filter) {
                        if (filter.userId == "all") {
                            return this._http.get(this._url)
                                .map(function (res) { return res.json(); });
                        }
                        else if (filter.userId != "9999") {
                            // https://jsonplaceholder.typicode.com/posts?userId=1
                            this._selectedUserPostsUrl = "https://jsonplaceholder.typicode.com/posts?userId=" + filter.userId;
                            return this._http.get(this._selectedUserPostsUrl)
                                .map(function (res) { return res.json(); });
                        }
                    }
                    else {
                        return this._http.get(this._url)
                            .map(function (res) { return res.json(); });
                    }
                };
                PostsService.prototype.getAllRelatedComments = function (postID) {
                    // commentUrl = "https://jsonplaceholder.typicode.com/posts/:postID/comments";
                    this._commentUrl = "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments";
                    return this._http.get(this._commentUrl)
                        .map(function (res) { return res.json(); });
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map