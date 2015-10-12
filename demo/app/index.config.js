(function () {
  'use strict';

  angular
    .module('angularUtils')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    // Extend the themes with a few different colors
    var redMap = $mdThemingProvider.extendPalette('red', {
      '500': 'C52033'
    });
    var greyMap = $mdThemingProvider.extendPalette('grey', {
      'A200': '9A999A'
    });
    // Register the new color palette maps
    $mdThemingProvider.definePalette('redMap', redMap);
    $mdThemingProvider.definePalette('greyMap', greyMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('redMap')
      .accentPalette('greyMap');
  }

})();
