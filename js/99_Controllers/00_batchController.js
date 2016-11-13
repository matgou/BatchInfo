/*
  src:js/Controllers/00_batchController.js
  description: Controller for batch information display page
  author: Mathieu GOULIN <mathieu.goulin@gadz.org>
*/

app.controller("batchController", function($scope, $http, $routeParams){
	$scope.params = $routeParams;
	$http.get("json/page_structure.json").then(function(response) {
		$scope.structure = response.data;
	});
	$http.get("json/" + $routeParams.batchName + ".json").then(function(response) {
		console.log("Information sur le batch : " + $routeParams.batchName);
		console.log(response.data);
		$scope.batchInfo = response.data;
	});
});

// EOF
