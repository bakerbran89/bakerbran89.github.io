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
    $scope.message = 'Welcome to my projects website.  This site is currently under construction.  I will be updating this website with various learning tutorials.';
});

appApp.controller('basicController', function($scope){
    $scope.message = 'My name is Brandon.  I like to camp, star gaze, play video games, and learn about computers.  I am a soon to be graduate in the exciting field of cybersecurity.  I will be working on this website as I transition from student to working professional.  I have learned a lot of important information through my cybersecurity coursework and would like to share my knowledge with others.  I look forward to building this website and hopefully inspiring others to learn something new.';
});

appApp.controller('portfolioController', function($scope){
    $scope.message = 'All I have at the moment are learning projects and this website.  You can check them out on GitHub, u/n bakerbran89.';
});

appApp.controller('projectsController', function($scope){
    $scope.message = 'My current projects include developing successful personal/interpersonal traits, completing formal training in cybersecurity, and playing around with WebDev UI/UX.';
});

appApp.controller('errorController', function($scope){
    $scope.message = 'This page cannot be found.';
});
