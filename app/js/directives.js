'use strict';

/* Directives */


var appMod = angular.module('playNg.directives', []);

appMod.directive('attrDir', function(){
   return {
      restrict: 'A',
      link: function(){
         alert('This is attribute directive!');
      }
   };
});

appMod.directive('attrDir2', function(){
   return {
      restrict: 'A',
      link: function(){
         alert('This is the 2nd attribute directive!');
      }
   };
});

appMod.directive('element', function() {
   return {
      restrict: 'E',
      template: '<div class="jumbotron"> This is element directive!</div>'
   };
});

appMod.directive('classDir', function() {
   return {
      restrict: 'C',
      template: '<div class="jumbotron"> This is a class directive!</div>'
   };
});



appMod.directive('commentDir', function(){
   return {
      restrict: 'M',
      link: function(){
         alert('This is comment directive!');
      }
   };
});
