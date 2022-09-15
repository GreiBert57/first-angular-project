import{ Component, OnInit} from "@angular/core";

import {RecipeService} from "./recipe.service";

@Component ({
  selector: 'app-recipe-book',
  templateUrl: './recipeBook.component.html',
})
export class recipeBook implements OnInit{
  constructor() {
  }

  ngOnInit() {}

}
