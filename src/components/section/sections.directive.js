(function() {
  'use strict';

  function SectionsCtrl( $rootScope, $timeout, $location, $window, smoothScroll ) {
    var vm = this;

    var sections = [];

    function initSection( sec ) {
      var pos = sections.length;
      sec.isCollapsed = pos % 2;
      sections.push( sec );
      return pos;
    }

    function getSection( title ) {
      for( var i = 0; i < sections.length; i++ ) {
        var section = sections[i];
        if( section.title === title ) {
          return section;
        }
      }
      return false;
    }

    function toggleSections( ) {
      sections.forEach( function( sec ) {
        sec.isCollapsed = !sec.isCollapsed;
      } );
    }

    function gotoSection( title ) {
      var sec = getSection( title )
      var el = document.getElementById( sec.title );
      if( sec.isCollapsed ) {
        toggleSections();
        $timeout( function() {
          smoothScroll( el );
        }, 1010 );
      }
      else {
        //$(document).scrollTop( $(el).offset().top );
        smoothScroll( el );
      }
    }

    function getSections( ) {
      return sections;
    }

    function onLocationChange( event ) {
      var title = $location.path().slice(1);
      gotoSection( title );
      event.preventDefault();
    }

    var init = $rootScope.$on('$locationChangeSuccess', function(event) {
      $timeout( function() {
        onLocationChange( event );
        $rootScope.$on('$locationChangeSuccess', onLocationChange);
      }, 500 );
      init();
      init = null;
    });

    vm.initSection = initSection;
    vm.toggleSections = toggleSections;
    vm.getSections = getSections;
  }

  function SectionsDir( ) {
    return {
      restrict: 'EA',
      controller: SectionsCtrl,
      controllerAs: 'sections'
    };
  }

  angular.module('mcollis')
    .directive('sections', SectionsDir);
})();
