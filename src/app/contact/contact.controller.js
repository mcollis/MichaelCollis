(function() {
  'use strict';

  function ContactCtrl( Mandrill ) {
    var vm = this;

    function sendEmail() {
      Mandrill.send();
    }

    vm.sendEmail = sendEmail;
  }

  angular.module('mcollis')
    .controller('ContactCtrl', ContactCtrl);
})();
