"use strict";

var app = angular.module('recipeApp');
app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: "partials/index.html",
        controller: "IndexController"
      })
    $urlRouterProvider.otherwise('/');
  }
]);
