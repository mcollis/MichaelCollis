(function() {
  'use strict';

  function Mandrill($http) {
    this.send = function(contact) {
      return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
        key: 'nG-A5IKBlKaLJ4y_T70pDA',
        message: {
          from_email: contact.email,
          from_name: contact.name,
          to: [
            {
              email: 'collis.michael@gmail.com',
              name: 'Mike Collis',
              type: 'to'
            }
          ],
          autotext: 'true',
          subject: 'MichaelCollis.com Contact Request',
          html: contact.comment
        }
      });
    }
  }

  angular.module('mcollis')
    .service('Mandrill', Mandrill);
})();
