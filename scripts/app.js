//create module to be referenced in html
//include custom module, [angular module: ngRoute]
var appApp = angular.module('appApp', ['ngRoute']);

//configure routes to specified template and controller
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

//controllers for each page associated with above routes.  just contains a message for now
appApp.controller('mainController', function($scope){
    $scope.message = 'Hello fellow Earthicans. \nThis website is intended to be my personal website, and also a template for a minimal Single Page Application (SPA). \nFeel free to clone the repository for this website and make it your own. \nThis website was thrown together using AngularJS, Bootstrap, and basic WebDev practices.';
});

appApp.controller('basicController', function($scope){
    $scope.message = 'My name is Brandon.  I like to camp, star gaze, play video games, smoke weed, and learn about computers.';
});

appApp.controller('portfolioController', function($scope){
    $scope.message = 'All I have at the moment are learning projects and this website.  You can check them out on GitHub, u/n bakerbran89.';
});

appApp.controller('projectsController', function($scope){
    $scope.message = 'So far, my projects include: developing successful personal/interpersonal traits, completing formal training in cybersecurity, and playing around with WebDev UI/UX.';
});

appApp.controller('errorController', function($scope){
    $scope.message = 'This page cannot be found.';
});