import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';

import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe!: Recipe;
 id!: number;

  constructor(private router: Router, private routeA: ActivatedRoute, private recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) =>
      {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  onAddToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.routeA});
  }

  onRemoveRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../../'], {relativeTo: this.route});
  }
}
