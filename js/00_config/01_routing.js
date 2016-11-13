/*
  src:js/Controllers/01_routing.js
  description: Map URL and template/controller
  author: Mathieu GOULIN <mathieu.goulin@gadz.org>
*/
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/main.html"
    })
    .when("/batch/:batchName", {
        templateUrl : "template/batchView.html",
        controller: "batchController"
    })

    .when("/report/:batchName", {
        templateUrl : "template/reportView.html"
    })
    .otherwise({
        templateUrl : "template/404.html"
    });
});

// EOF
