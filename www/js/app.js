var app = angular.module("demo", ["ngRoute", "ngMap"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "www/templates/main.html",
        controller : "HomeCtrl"
    })
    .when("/posts/:id", {
        templateUrl : "www/templates/posts/show.html",
        controller : "PostCtrl",
    })
    .when("/users", {
        templateUrl : "www/templates/users/list.html",
        controller : "UserCtrl",
    })
    .when("/users/:id", {
        templateUrl : "www/templates/users/show.html",
        controller : "UserCtrl",
    });
});
