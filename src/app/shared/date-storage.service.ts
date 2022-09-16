import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../header/recipeBook/recipe.service";
import {Recipe} from "../header/recipeBook/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})

export class DateStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes () {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://angular-13e70-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchRecipes() {
    /*this.authService.user.pipe(take(1), exhaustMap(user => {

    })).subscribe();*/
    return this.http
      .get<Recipe[]>('https://angular-13e70-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
