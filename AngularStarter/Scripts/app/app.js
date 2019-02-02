// Main configuration file. Sets up AngularJS module and routes and any other config objects

// Define the main module
var appRoot = angular.module('main', ['ngRoute', 'ngGrid', 'ngResource', 'angularStart.services', 'angularStart.directives']);

appRoot
    .config(['$routeProvider', function ($routeProvider) {
        // Setup routes to load partial templates from server. TemplateUrl is the location for the server view (Razor .cshtml view)
        $routeProvider
            .when('/home',
                    { templateUrl: '/home/main',
                      controller: 'MainController' })
            .when('/contact',
                    { templateUrl: '/home/contact',
                      controller: 'ContactController' })
            .when('/about',
                    { templateUrl: '/home/about',
                      controller: 'AboutController' })
            .when('/demo',
                    { templateUrl: '/home/demo',
                      controller: 'DemoController' })
            .when('/angular',
                    { templateUrl: '/home/angular',
                      controller: 'AngularController' })
            .otherwise({ redirectTo: '/home' });
    }])
    .controller('RootController', ['$scope',
                                   '$route',
                                   '$routeParams',
                                   '$location',
                                   function ($scope, $route, $routeParams, $location) {
                                    $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                                        $scope.activeViewPath = $location.path();
                                    });
                                   }
                                  ]
    );
