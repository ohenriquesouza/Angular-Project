import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Bife', 2),
    new Ingredient('Alface', 4),
    new Ingredient('Queijo', 6),
    new Ingredient('Cebola', 2),
    new Ingredient('Molho especial', 4),
    new Ingredient('Picles', 1),
    new Ingredient('Tomate', 2),
    new Ingredient('Bacon', 4),
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  constructor(){}

}
