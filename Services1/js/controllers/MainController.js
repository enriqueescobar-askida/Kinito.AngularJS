app.controller('MainController',
    ['$scope', 'forecast', function ($scope, forecast) { // adding dependency to forecast()
        $scope.fiveDay_string = '5-day forecast';
        forecast.success(function (data) { // mapping forecast.success(function (data) {}
            $scope.fiveDay = data;});
        }
    ]
);
