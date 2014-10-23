'use strict';

/* Directives */


var appMod = angular.module('playNg.directives.behaviours', []);

appMod.directive('enter', function(){
   return function(scope, element, attrs){
      element.bind('mouseenter', function(){
         element.addClass(attrs.enter);
      });
   };
});

appMod.directive('leave', function(){
   return function(scope, element, attrs){
      element.bind('mouseleave', function(){
         element.removeClass(attrs.enter);
      });
   };
});

appMod.directive('talk', function(){
   return function(scope, element, attrs){
      element.bind('mouseenter', function(){
         scope.$apply(attrs.talk);
         console.log(attrs.talk);
      });
   };
});