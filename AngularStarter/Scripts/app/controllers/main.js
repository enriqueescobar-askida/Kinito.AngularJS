angular.module('main')
    .controller('MainController', ['$scope', function ($scope) {
        $scope.topics = [
            {
                title: 'Learning ASP.Net MVC',
                description: 'ASP.NET MVC gives you a powerful, patterns-based way to build dynamic websites that enables a clean separation of concerns and that gives you full control over markup for enjoyable, agile development. ASP.NET MVC includes many features that enable fast, TDD-friendly development for creating sophisticated applications that use the latest web standards',
                follow: 'Learn More »',
                link: 'http://go.microsoft.com/fwlink/?LinkId=245151'
            },
            {
                title: 'New to AngularJS !',
                description: 'AngularJS is what HTML would have been, had it been designed for building web-apps. We have highlighted some of the resources that would help you learn about the framework and make you productive',
                follow: 'Learn More »',
                link: '#/angular'
            },
            {
                title: 'What\'s Included',
                description: 'This project integrates multiple libraries\components. Other than the MVC framework and AngularJS there are other elements like Bootstrap for css. Angular UI for some predefined UI widgets',
                follow: 'Learn More »',
                link: '#/whatsincluded'
            }
        ]
}]);