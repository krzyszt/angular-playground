'use strict';

/* Controllers */

angular.module('playNg.controllers', [])
  .controller('DirectiveTestCtrl', ['$scope', function($scope) {
        $scope.text = 'Iam test text';
  }])
  .controller('DirectiveToControllerCtrl', ['$scope', function($scope) {
        $scope.loadSomeStuff = function(){
           alert('Loading some stuff!');
        };
        
        $scope.deleteSomeStuff = function(){
           alert('Deleting some stuff!');
        };
  }])
  .controller('SimpleHttpCtrl', ['$scope', '$http', function($scope, $http){
        
        var futureResponse = $http.get('/simple-http');
        
        futureResponse.success(function(data, status, headers, config){
           $scope.data = data;
        });
        
        
  }]);
