app.controller('HomeController', ['$scope', 'emails', function ($scope, emails) { // add emails and pass it
    emails.success(function (data) { // to use the data
        $scope.emails = data;
    });
} ]);