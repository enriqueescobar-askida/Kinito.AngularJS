app.controller('EventController', ['$scope', 'events', '$routeParams', function ($scope, events, $routeParams) {
    $scope.name = 'Tone';
    events.success(function (data) {
        $scope.event = data.events[$routeParams.id];
    });
} ]);