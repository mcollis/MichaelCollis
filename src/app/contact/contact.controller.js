(function() {
  'use strict';

  function ContactCtrl( Mandrill ) {
    var vm = this;
    function sendEmail( contact ) {
      Mandrill.send( contact ).then( function( data ) {
        vm.contact = {};
        vm.message = 'Message Sent';
      } );
    }
    vm.sendEmail = sendEmail;
  }

  angular.module('mcollis')
    .controller('ContactCtrl', ContactCtrl);
})();
