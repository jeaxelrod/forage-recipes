"use strict";

describe("RecipesService", function() {
  var RecipesService, $httpBackend, recipes, response,
      ids = [109121, 109131, 109141, 108241, 108781, 108651];


  beforeEach(module("recipeApp"));

  beforeEach(inject(function(_RecipesService_, _$httpBackend_) {
    response = null;
    RecipesService = _RecipesService_;
    $httpBackend = _$httpBackend_;
  }));

  it("should list all ids", function() {
    expect(RecipesService.getIds()).toEqual(ids);
  });

  it("should get all recipes", function() {
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[0]).
      respond({});
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[1]).
      respond({});
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[2]).
      respond({});
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[3]).
      respond({});
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[4]).
      respond({});
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[5]).
      respond({});
    
    RecipesService.getRecipes().then(function(data) {
      response = data;
    });
    $httpBackend.flush();

    expect(response.length).toBe(6);
  });

  it("should get a single recipe", function() {
    var id = ids[0];
    $httpBackend.expectGET("https://api.forage.co/v1/recipe/view?recipe_id=" + ids[0]).
      respond({success: true});
    
    RecipesService.getRecipe(id).then(function(data) {
      response = data
    });
    $httpBackend.flush();

    expect(response.success).toEqual(true);
  });
});
