import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";

import {recipeBook} from "./header/recipeBook/recipeBook.component";
import {shoppingList} from "./header/shoppingList/shoppingList.component";
import {RecipeStartComponent} from "./header/recipeBook/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./header/recipeBook/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./header/recipeBook/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./header/recipeBook/recipes-resolver.service";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {
    path: 'recipes',
    component: recipeBook,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      {path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: shoppingList},
  {path: 'auth', component: AuthComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
