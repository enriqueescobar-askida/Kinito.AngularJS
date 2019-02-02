'use strict';

app.controller('homeController',
    ['$scope', function ($scope) {
        $scope.message = "Now viewing home!";
        $scope.app_store = 'Available for Windows, iPhone and Android.';
        }
    ]
);
