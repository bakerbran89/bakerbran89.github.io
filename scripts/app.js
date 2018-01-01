//create module to be referenced in html
//include ngRoute
var appApp = angular.module('appApp', ['ngRoute']);

//configure routes
appApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'content/home.html', 
            controller:'mainController'
        })
        .when('/basic',{
            templateUrl:'content/basic.html', 
            controller:'basicController'
        })
        .when('/portfolio',{
            templateUrl:'content/portfolio.html', 
            controller:'portfolioController'
        })
        .when('/projects',{
            templateUrl:'content/projects.html', 
            controller:'projectsController'
        })
        .when('/error',{
            templateUrl:'content/error.html', 
            controller:'errorController'
        })
        .otherwise({
            redirectTo:'/error'
        });
});

//app controllers REDO!!!!!
appApp.controller('mainController', function($scope){
    $scope.message = 'Home page content will go here.';
});

appApp.controller('basicController', function($scope){
    $scope.message = 'My basic information will go here.';
});

appApp.controller('portfolioController', function($scope){
    $scope.message = 'All I have at the moment are learning projects.  You can check them out on my github.';
});

appApp.controller('projectsController', function($scope){
    $scope.message = 'I want to consolidate this website down to one html file, one js file, and maybe a css file.';
});

appApp.controller('errorController', function($scope){
    $scope.message = 'This page cannot be found.';
});