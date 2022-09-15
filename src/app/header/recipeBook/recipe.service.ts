import {Recipe} from "./recipe.model";
import {Ingredient} from "../../ingredient.model";
import {Injectable} from "@angular/core";
import {ShoppingListService} from "../shoppingList/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Veggies with soggy towel',
      'You have to try this delicious recipe with fresh veggies and a soggy towel!',
      'https://image.shutterstock.com/image-photo/food-photography-260nw-578546905.jpg',
      [
        new Ingredient('Carrot', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('water', 1),
        new Ingredient('towel', 1)
      ]),
    new Recipe('Juicy burgir with fries',
      'This burgor will make you feel like you\'re in heaven in spite of your sinful deeds in the mortal wold ',
      'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Salad', 1),
        new Ingredient('Onion', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Potat', 4),

      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
