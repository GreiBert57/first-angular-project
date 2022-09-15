import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {headerComponent} from "./header/header.component";

import { AppComponent } from './app.component';
import {shoppingList} from "./header/shoppingList/shoppingList.component";
import {recipeBook} from "./header/recipeBook/recipeBook.component";
import { RecipeListComponent } from './header/recipeBook/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './header/recipeBook/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './header/recipeBook/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './header/shoppingList/shopping-edit/shopping-edit.component';
import {dropdownDirective} from "./shared/dropdown.directive";
import {RecipeService} from "./header/recipeBook/recipe.service";
import {ShoppingListService} from "./header/shoppingList/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './header/recipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './header/recipeBook/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    shoppingList,
    recipeBook,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    dropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
