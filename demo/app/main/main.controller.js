(function () {
  'use strict';

  angular
    .module('angularUtils')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    activate();

    function activate() { }
  }
})();
