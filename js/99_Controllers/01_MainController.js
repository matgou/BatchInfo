/*
  src:js/Controllers/01_MainController.js
  description: Controller for base
  author: Mathieu GOULIN <mathieu.goulin@gadz.org>
*/
app.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })
;

// EOF
