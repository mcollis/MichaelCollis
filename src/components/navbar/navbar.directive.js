(function() {
  'use strict';

  function NavbarDir( ) {
    return {
      restrict: 'EA',
      require: ['^section', '^sections'],
      scope: { },
      templateUrl: 'components/navbar/navbar.html',
      link: function link( scope, element, attrs, ctrls ) {
        var sectionCtrl = ctrls[0];
        var sectionsCtrl = ctrls[1];
        scope.sections = sectionsCtrl.getSections();
        scope.title = sectionCtrl.title;

        scope.sectionsLeft = scope.sections.filter( function(sec) {
          return sec.isEven === sectionCtrl.isEven;
        } );
        scope.sectionsRight = scope.sections.filter( function(sec) {
          return sec.isEven != sectionCtrl.isEven;
        } );
      }
    }
  }

  angular.module('mcollis')
    .directive('navbar', NavbarDir);
})();
