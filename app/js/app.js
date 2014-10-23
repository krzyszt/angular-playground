'use strict';


// Declare app level module which depends on filters, and services
angular.module('playNg', [
  'ngRoute',
  'playNg.filters',
  'playNg.services',
  'playNg.directives',
  'playNg.controllers',
  'playNg.directives.behaviours'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/custom-directives', {templateUrl: 'partials/custom.tpl.html', controller: 'DirectiveTestCtrl'});
  $routeProvider.when('/behaviours', {templateUrl: 'partials/behaviours.tpl.html', controller: 'DirectiveTestCtrl'});
  $routeProvider.when('/directive-to-controller', {templateUrl: 'partials/directive-to-controller.tpl.html', controller: 'DirectiveToControllerCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
