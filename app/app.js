'use strict';

// Declare app level module which depends on views, and components
var recipeApp = angular.module('recipeApp', ['ui.router', 'restangular']);

recipeApp.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: "partials/index.html",
        controller: "IndexController"
      })
    $urlRouterProvider.otherwise('/');
  }
]);
