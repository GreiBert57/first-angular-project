import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";

import {recipeBook} from "./header/recipeBook/recipeBook.component";
import {shoppingList} from "./header/shoppingList/shoppingList.component";
import {RecipeStartComponent} from "./header/recipeBook/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "./header/recipeBook/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "./header/recipeBook/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component: recipeBook, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: shoppingList}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
