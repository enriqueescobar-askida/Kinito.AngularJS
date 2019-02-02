app.controller('footerController',
    ['$scope', function ($scope) {
            $scope.bolts_name = 'Bolt';
            $scope.bolts = [
                {
                    name: 'Careers',
                    description: 'Careers description.',
                    link : ''
                },
                {
                    name: 'Terms',
                    description: 'Terms description.',
                    link: ''
                },
                {
                    name: 'Help',
                    description: 'Help description.',
                    link: ''
                }
            ];
            $scope.more_bolts_name = 'More Bolt';
            $scope.more_bolts = [
                {
                    name: 'Gift Cards',
                    description: 'Gift Cards description.',
                    link: ''
                },
                {
                    name: 'Trailers',
                    description: 'Trailers description.',
                    link: ''
                }
            ];
            $scope.extras_name = 'News';
            $scope.extras = [
                {
                    name: 'Blog',
                    description: 'Blog description.',
                    link: ''
                },
                {
                    name: 'Twitter',
                    description: 'Twitter description.',
                    link: ''
                },
                {
                    name: 'Youtube',
                    description: 'Youtube description.',
                    link: ''
                },
                {
                    name: 'Google+',
                    description: 'Google+ description.',
                    link: ''
                },
                {
                    name: 'Facebook',
                    description: 'Facebook description.',
                    link: ''
                }
            ];
        }
    ]
);