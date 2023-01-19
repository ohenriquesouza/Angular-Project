import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService{

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

}