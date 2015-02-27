(function() {
  'use strict';

  function Mandrill($http) {
    this.send = function() {
      return $http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
        key: 'nG-A5IKBlKaLJ4y_T70pDA',
        message: {
          from_email: 'mikec@whoisstudio.com',
          to: [
            {
              email: 'collis.michael@gmail.com',
              name: 'Mike Collis',
              type: 'to'
            }
          ],
          autotext: 'true',
          subject: 'YOUR SUBJECT HERE!',
          html: 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      });
    }
  }

  angular.module('mcollis')
    .service('Mandrill', Mandrill);
})();
