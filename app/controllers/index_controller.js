"use strict";

var app = angular.module("recipeApp");

app.controller("IndexController", ['$scope', 'RecipesService', '$http',
  function($scope, RecipesService, $http) {
    RecipesService.getRecipes().then(function(response) {
      $scope.recipes = response; 
      console.log(response);
    });
  }
]);
