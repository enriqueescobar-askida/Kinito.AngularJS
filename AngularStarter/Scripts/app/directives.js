// Define you directives here. Directives can be added to same module as 'main' or a separate module can be created.

//Define the directive module
var angularStartDirectives = angular.module('angularStart.directives', []);

//use as 'test-directive' in HTML
angularStartDirectives.directive('testDirective', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log('Directive linked.');
        }
    };
});