angular.module('main')
    .controller('AngleController', ['$scope', function ($scope) {
        $scope.implementations = [
            {
                link: 'http://blog.angularjs.org/2012/11/angularjs-example-applications.html',
                text: 'Example Apps with Source code'
            },
            {
                link: 'http://builtwith.angularjs.org',
                text: 'Build with Angular'
            }
        ]
}]);