app.controller('headerController',
    ['$scope', function ($scope) {
        $scope.head_title = 'Header Section';
        $scope.head_subtitle = 'Header Subsection';
        $scope.section = 'Invoices';
        $scope.invoices = ['Invoice', 'InvoiceA', 'InvoiceB', 'InvoiceC'];
        }
    ]
);