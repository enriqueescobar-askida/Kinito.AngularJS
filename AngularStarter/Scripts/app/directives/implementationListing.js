appRoot.directive('implementationListing', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'implementationListing.html'
    };
});