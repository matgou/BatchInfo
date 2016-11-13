/*
  src:js/Controllers/01_routing.js
  description: Controller for Header
  author: Mathieu GOULIN <mathieu.goulin@gadz.org>
*/
app.controller("headerCtrl", function($scope, $http){
	$http.get('json/project.json').then(function(response) {
		$scope.project = response.data;
	})
});

// EOF
