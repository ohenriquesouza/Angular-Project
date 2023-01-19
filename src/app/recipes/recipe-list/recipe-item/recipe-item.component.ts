import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  
  @Input() recipe!: Recipe;

  constructor(private recipeServide: RecipeService){

  }

  onSelected(){
    this.recipeServide.recipeSelected.emit(this.recipe);
  }

  
}
