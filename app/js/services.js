'use strict';

/* Services */


var playNg = angular.module('playNg.services', []);


playNg.factory('Post', function($resource){
   return $resource("api/posts/:id");
});