import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private slService: ShoppingListService){}

  ngOnInit(){
    
  }

  onAddToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient);
  }



}
