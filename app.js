//create module to be referenced in html
//include ngRoute
var appApp = angular.module('appApp', ['ngRoute']);

//configure routes
appApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'home.html', 
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
        .otherwise('/error',{
            templateUrl:'content/error.html', 
            controller:'errorController'
        })
});

//app controllers REDO!!!!!
appApp.controller('mainController', function($scope){
    $scope.message = 'Home page content goes here!';
});

appApp.controller('basicController', function($scope){
    $scope.message = 'My basic info goes here.  Should I pretend I\'m cool?';
});

appApp.controller('portfolioController', function($scope){
    $scope.message = 'Heh, the content for this topic will take a while.';
});

appApp.controller('projectsController', function($scope){
    $scope.message = 'I am currently working on this SPA, right now, as I type this out.';
});

appApp.controller('errorController', function($scope){
    $scope.message = 'The fuck you trying to do?  You know this link is not an option.';
});