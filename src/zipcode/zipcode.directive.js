(function () {
    'use strict';

    angular
        .module('credera.utils.zipcode')
        .directive('zipCode', zipCode);

    function zipCode() {
        var directive = {
            restrict: 'A',
            require: ['ngModel', '?^form'],
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs, ctrls) {
            var modelCtrl = ctrls[0], formCtrl = ctrls[1];
            modelCtrl.$formatters.unshift(addFormatter);
            modelCtrl.$parsers.unshift(addParser);

            function addFormatter(inputValue) {
                var formatted = setVal(inputValue, false);
                modelCtrl.$setPristine();
                if (formCtrl) {
                    formCtrl.$setPristine();
                }
                setValidity(formatted, false);
                return formatted;
            }
            function addParser(inputValue) {
                var formatted = setVal(inputValue, true);
                setValidity(formatted, true);
                return formatted;
            }

            function getNumbers(inputValue) {
                return inputValue.toString().replace(/[^0-9]/g, '');
            }

            function setVal(inputValue, isParser) {
                var transformedInput = '', returnInput;
                if (inputValue !== undefined) {
                    transformedInput = getNumbers(inputValue);
                    var len = transformedInput.length;
                    if (len > 9) {
                        transformedInput = transformedInput.substring(0, 9);
                    }
                    returnInput = transformedInput;

                    if (len > 5) {
                        transformedInput =
                        transformedInput.substring(0, 5) + '-' + transformedInput.substring(5, len);
                    }

                    if (transformedInput !== inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                }
                if (!isParser) {
                    returnInput = transformedInput;
                }
                return returnInput;
            }

            function setValidity(zip, isParser) {
                var len = zip ? zip.length : 0,
                    maxSize = isParser ? 9 : 10;
                if (len !== 5 && len !== 0 && len !== maxSize) {
                    modelCtrl.$setValidity('zip', false);
                } else {
                    modelCtrl.$setValidity('zip', true);
                }
            }
        }
    }
})();
