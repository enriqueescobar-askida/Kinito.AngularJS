app.controller('MainController',
    ['$scope', function ($scope) {
            $scope.centre_title = 'Specials for';
            $scope.today = new Date();
            $scope.appetizers_title = 'Appetizers';
            $scope.appetizers = [
            {
                name: 'Caprese',
                description: 'Mozzarella, tomatoes, basil, balsamic glaze.',
                price: 4.95
            },
            {
                name: 'Mozzarella Sticks',
                description: 'Served with marinara sauce.',
                price: 3.95
            },
            {
                name: 'Bruschetta',
                description: 'Grilled bread garlic, tomatoes, olive oil.',
                price: 4.95
            }
            ];
            $scope.mains_title = 'Mains';
            $scope.mains = [
            {
                name: 'Saltena',
                description: 'Empanada from Bolivia.',
                price: 3.00
            },
            {
                name: 'Plato paceno',
                description: 'Simplest meal from La Paz.',
                price: 10.00
            },
            {
                name: 'Chairo',
                description: 'Soup, for cold days.',
                price: 8.00
            }
          ];
            $scope.extras_title = 'Extras';
            $scope.extras = [
            {
                name: 'Llajua',
                description: 'Hot spicy sauce from Bolivia.',
                price: 2.00
            },
            {
                name: 'Ulupicas',
                description: 'Smallest round hot peppers from La Paz.',
                price: 1.00
            }
          ];
        }
    ]
);