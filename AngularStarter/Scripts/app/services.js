// Define you service here. Services can be added to same module as 'main' or a separate module can be created.

// Define the services module
var angularStartServices = angular.module('angularStart.services', ['ngResource']);

angularStartServices.factory('TestService', [function () {
    var service = {};
    service.doWork = function () {
        console.log('Did some work !');
    }
    return service;
}]);