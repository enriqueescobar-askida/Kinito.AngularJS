var app = angular.module("LoggingApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/invoice', {
        controller: "invoiceController",
        templateUrl: "views/invoice.html"
    })
    .when('/invoiceA', {
        controller: "invoiceAController",
        templateUrl: "views/invoiceA.html"
    })
    .when('/invoiceB', {
        controller: 'invoiceBController',
        templateUrl: 'views/invoiceB.html'
    })
    .when('/invoiceC', {
        controller: 'invoiceCController',
        templateUrl: 'views/invoiceC.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
