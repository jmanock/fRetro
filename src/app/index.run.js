(function() {
  'use strict';

  angular
    .module('fRetro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
