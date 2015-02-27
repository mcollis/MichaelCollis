"use strict";angular.module("mcollis",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.bootstrap","smoothScroll"]).config(["$anchorScrollProvider",function(t){t.disableAutoScrolling()}]),function(){function t(t,n,e,i,o){function l(t){var n=v.length;return t.isCollapsed=n%2,v.push(t),n}function c(t){for(var n=0;n<v.length;n++){var e=v[n];if(e.title===t)return e}return!1}function s(){v.forEach(function(t){t.isCollapsed=!t.isCollapsed})}function a(t){var e=c(t),i=document.getElementById(e.title);e.isCollapsed?(s(),n(function(){o(i)},1010)):o(i)}function r(){return v}function u(t){var n=e.path().slice(1);a(n),t.preventDefault()}var m=this,v=[],f=t.$on("$locationChangeSuccess",function(e){n(function(){u(e),t.$on("$locationChangeSuccess",u)},500),f(),f=null});m.initSection=l,m.toggleSections=s,m.getSections=r}function n(){return{restrict:"EA",controller:t,controllerAs:"sections"}}t.$inject=["$rootScope","$timeout","$location","$window","smoothScroll"],angular.module("mcollis").directive("sections",n)}(),function(){function t(){var t=this;t.parent=void 0,t.isEven=void 0,t.title=void 0,t.isCollapsed=!1}function n(){return{scope:{title:"@section"},transclude:!0,restrict:"EA",require:"^sections",templateUrl:"components/section/section.tpl.html",controller:t,controllerAs:"section",link:function(t,n,e,i){var o=i.initSection(t.section);t.section.title=t.title,t.section.isEven=o%2,t.section.parent=i}}}angular.module("mcollis").directive("section",n)}(),function(){function t(){return{restrict:"EA",require:["^section","^sections"],scope:{},templateUrl:"components/navbar/navbar.html",link:function(t,n,e,i){var o=i[0],l=i[1];t.sections=l.getSections(),t.title=o.title,t.sectionsLeft=t.sections.filter(function(t){return t.isEven===o.isEven}),t.sectionsRight=t.sections.filter(function(t){return t.isEven!=o.isEven})}}}angular.module("mcollis").directive("navbar",t)}(),function(){function t(t){this.send=function(n){return t.post("https://mandrillapp.com/api/1.0/messages/send.json",{key:"nG-A5IKBlKaLJ4y_T70pDA",message:{from_email:n.email,from_name:n.name,to:[{email:"collis.michael@gmail.com",name:"Mike Collis",type:"to"}],autotext:"true",subject:"MichaelCollis.com Contact Request",html:n.comment}})}}t.$inject=["$http"],angular.module("mcollis").service("Mandrill",t)}(),function(){function t(){}angular.module("mcollis").controller("MainCtrl",t)}(),function(){function t(t){function n(n){t.send(n).then(function(){e.contact={},e.message="Message Sent"})}var e=this;e.sendEmail=n}t.$inject=["Mandrill"],angular.module("mcollis").controller("ContactCtrl",t)}(),angular.module("mcollis").run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<div class="navigation clearfix"><ul class="nav nav-pills pull-left"><li ng-repeat="sec in sectionsLeft" ng-class="{active: title == sec.title}"><a ng-href="#/{{sec.title}}">{{sec.title}}</a></li></ul><ul class="nav nav-pills pull-right"><li ng-repeat="sec in sectionsRight" ng-class="{active: title == sec.title}"><a ng-href="#/{{sec.title}}">{{sec.title}}</a></li></ul></div>'),t.put("components/section/section.tpl.html",'<div collapse="section.isCollapsed" ng-class="{even: section.isEven, odd: !section.isEven}" id="{{title}}" class="section"><div class="wrapper"><div navbar=""></div><div ng-transclude=""></div></div></div>')}]);