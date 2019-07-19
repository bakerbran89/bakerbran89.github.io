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
    $scope.message = 'My name is Brandon.  I like to learn about computers.  I am a soon to be graduate in the exciting field of Cybersecurity.  I will be working on this website as I transition from student to working professional.  I look forward to building this website and hopefully inspiring others to learn something new.';
});

appApp.controller('portfolioController', function($scope){
    $scope.message = 'This will be updated soon.  I might make it a resume page until I have some projects that I have designed myself.';
});

appApp.controller('projectsController', function($scope){
    $scope.message = 'My current projects are based around learning.  I am trying to build a foundation in malware analysis, penetration testing, and web development.  Tutorials will be added to this section.';
});

appApp.controller('errorController', function($scope){
    $scope.message = 'Page not found.  Either something is broken, or you are not using the nav-bar.';
});
