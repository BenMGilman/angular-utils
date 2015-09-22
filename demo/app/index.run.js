(function() {
  'use strict';

  angular
    .module('angularUtils')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
