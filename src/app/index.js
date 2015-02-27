'use strict';

angular.module('mcollis', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'smoothScroll'])
  .config( ['$anchorScrollProvider',
    function($anchorScrollProvider) {
      $anchorScrollProvider.disableAutoScrolling();
    }]
   );
