"use strict";

var app = angular.module("recipeApp");

app.factory("RecipesService", ['$q', 'Restangular',
  function($q, Restangular) {
    var ids = [109121, 109131, 109141, 108241, 108781, 108651];
    function getRecipe(id) {
      return Restangular.oneUrl('recipes', 'https://api.forage.co/v1/recipe/view?recipe_id=' + id).get();
    };

    return {
      getRecipe: getRecipe,
      getRecipes: function() {
        var data = [],
            deferred = $q.defer();
        for (var i=0, ii=ids.length; i<ii; i++) {
          var id = ids[i];
          getRecipe(id).then(function(response) {
            data.push(response);
          }, function(response) {
            deferred.reject("Failed to retrieve all recipes");
          });
        }
        deferred.resolve(data);
        return deferred.promise;
      },
      getIds: function() {
        return ids
      }
    };
  }
]);
