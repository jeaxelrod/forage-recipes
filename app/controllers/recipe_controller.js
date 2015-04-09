"use strict";

var app = angular.module("recipeApp");

app.controller("RecipeController", ['$scope', 'RecipesService', '$stateParams',
  function($scope, RecipesService, $stateParams) {
    $scope.id = $stateParams.id;
    RecipesService.getRecipe($scope.id).then(function(response) {
      $scope.recipe = response.data.recipe;
    });
  }
]);
