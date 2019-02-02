app.controller('ShowController', ['$scope', 'shows', '$routeParams', function ($scope, shows, $routeParams) {
    shows.success(function (data) {
        $scope.show = data[$routeParams.id];
    });
} ]);