(function() {
  'use strict';

  function SectionCtrl( ) {
    var vm = this;

    vm.parent = undefined;
    vm.isEven = undefined;
    vm.title = undefined;
    vm.isCollapsed = false;
  }

  function SectionDir( ) {
    return {
      scope: {
        title: '@section'
      },
      transclude: true,
      restrict: 'EA',
      require: '^sections',
      templateUrl: 'components/section/section.tpl.html',
      controller: SectionCtrl,
      controllerAs: 'section',
      link: function link(scope, element, attrs, ctrl) {
        var pos = ctrl.initSection( scope.section );
        scope.section.title = scope.title;
        scope.section.isEven = pos % 2;
        scope.section.parent = ctrl;
      }
    };
  }

  angular.module('mcollis')
    .directive('section', SectionDir);
})();
