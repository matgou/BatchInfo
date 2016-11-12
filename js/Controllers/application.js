var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/main.html"
    })
    .when("/batch/:batchName", {
        templateUrl : "template/batchView.html"
    })
	
    .when("/report/:batchName", {
        templateUrl : "template/reportView.html"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });
});

app.controller("headerCtrl", function($scope, $http){
	$http.get('json/project.json').then(function(response) {
		$scope.project = response.data;
	})
});

// test