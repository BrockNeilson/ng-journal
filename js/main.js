var app = angular.module('journalApp', ['ngRoute', 'textAngular']);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/draft", {templateUrl: "partials/draft.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // 404 ya crazy! 
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

// Config the blog
app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

// Controls the Blog 
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});


// Controls all other Pages
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");


// Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});