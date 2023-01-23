import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
      new Ingredient('Bife', 2),
      // new Ingredient('Alface', 4),
      // new Ingredient('Queijo', 6),
      // new Ingredient('Cebola', 2),
      // new Ingredient('Molho especial', 4),
      // new Ingredient('Picles', 1),
      // new Ingredient('Tomate', 2),
      // new Ingredient('Bacon', 4),
  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //     this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}