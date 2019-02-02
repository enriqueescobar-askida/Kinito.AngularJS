app.controller('footerController',
    ['$scope', function ($scope) {
        $scope.footer_title = 'Footer Section';
        $scope.footer_subtitle = 'Footer Subsection';
        $scope.bolts_name = 'Bolt';
        $scope.bolts = [
            {
                name: 'Careers',
                description: 'Careers description.',
                link: ''
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
                description: 'Blog description',
                link: 'tenplay.com.au/channel-ten/the-bolt-report',
                share: 'http://tenplay.com.au/channel-ten/the-bolt-report'
            },
            {
                name: 'Facebook',
                description: 'Facebook description',
                link: 'www.facebook.com/theboltnetwork',
                share: 'http://www.facebook.com/sharer.php?u='
            },
            {
                name: 'Google+',
                description: 'Google+ description',
                link: 'plus.google.com/+BOLTTAC/about',
                share: 'https://plus.google.com/share?url='
            },
            {
                name: 'LinkedIn',
                description: 'LinkedIn description',
                link: 'www.linkedin.com/company/bolt',
                share: 'https://www.linkedin.com/shareArticle?mini=true&url='
            },
            {
                name: 'Twitter',
                description: 'Twitter description',
                link: 'twitter.com/theboltreport10?lang=en',
                share: 'https://twitter.com/home?status='
            },
            {
                name: 'Youtube',
                description: 'Youtube description',
                link: 'www.youtube.com/user/boltvlogshow',
                share: 'http://www.youtube.com/user/boltvlogshow'
            }
        ];
    }
    ]
);