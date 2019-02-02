angular.module('main')
    .controller('AngularController', ['$scope', function ($scope) {
        $scope.bulletpoints = [
            {
                head: 'Again ! this ',
                text: 'wiki',
                link: 'https://github.com/angular/angular.js/wiki/Understanding-Scopes',
                tail: ' entry is something you cannot avoid. Read..read..reread !'
            },
            {
                head: 'Read the ',
                text: 'developer guide.',
                link: 'http://docs.angularjs.org/guide/',
                tail: ' The guide explains the internal working on AnuglarJS and how things fit together. Once you are into serious development you would keep coming back to it again and again.'
            },
            {
                head: 'Directives in Angular are the toughest part which cannot be avoid. Read the ',
                text: 'directive section of developer guide.',
                link: 'http://docs.angularjs.org/guide/directive',
                tail: ' You may not get a hang of directive on the first go, so read..read..reread!'
            },
            {
                head: 'If you want to know how does the super awesome ',
                text: 'data binding',
                link: 'http://stackoverflow.com/questions/9682092/databinding-in-angularjs/9693933#9693933',
                tail: ' happens in Angular. Read the SO post'
            },
            {
                head: 'Ask question and help others on ',
                text: 'Stack Overflow',
                link: 'http://stackoverflow.com/questions/tagged/angularjs',
                tail: 'Google Groups'
            },
            {
                head: 'Follow the latest in AngularJS on ',
                text: 'Google+ Channel',
                link: 'https://plus.google.com/+AngularJS',
                tail: ''
            }
        ]
    } ]);