(function () {
    'use strict';

    angular
        .module('angularUtils')
        .directive('cdaCodeBlock', cdaCodeBlock);

    cdaCodeBlock.$inject = ['$window', '$timeout'];
    function cdaCodeBlock($window, $timeout) {
        var directive = {
            restrict: 'AE',
            templateUrl: '/app/components/codeBlock/code-block.directive.html',
            transclude: true,
            replace: true,
            scope: {
                lang: '@'
            },
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            var block = element.find('ng-transclude').children('span').html();
            element.find('code').html(block);
            $window.hljs.highlightBlock(element[0]);
        }
    }
})();
