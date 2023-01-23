import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService{

   recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){}

    recipes: Recipe[] = [
        new Recipe('Big Mac', 'O queridinho de todos', 
        'https://www.farofamagazine.com.br/wp-content/uploads/2022/05/big.jpg', '503 kcal',
         [
            new Ingredient('Pão com gergelim', 1),
            new Ingredient('Hambúrgeres bovinos', 2),
            new Ingredient('Alface Americana', 1),
            new Ingredient('Queijo cheddar', 2),
            new Ingredient('Maionese Big Mac', 1),
            new Ingredient('Cebola', 1),
            new Ingredient('Picles', 1),
         ]),
        new Recipe('Big Tasty', 'Pra quando bater a Big Fome', 
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXKz2eL/200/200/original?country=br', '944 kcal', 
        [
            new Ingredient('Pão com gergelim', 1),
            new Ingredient('Hambúrger bovino', 1),
            new Ingredient('Alface Americana', 1),
            new Ingredient('Queijo sabor emental', 2),
            new Ingredient('Molho Tasty', 1),
            new Ingredient('Cebola', 1),
        ]),
        new Recipe('Chedar McMelt', 'O brasileirinho mais aclamado', 
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXu0yRK/200/200/original?country=br', '474 kcal',
         [
            new Ingredient('Pão escuro com gergelim', 1),
            new Ingredient('Hambúrger bovino', 1),
            new Ingredient('Molho lácteo cremoso sabor cheddar', 1),
            new Ingredient('Cebola ao molho shoyu', 1),
         ]),
        new Recipe('Quarteirão com Queijo', 'Uma explosão de queijo', 
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXDlz7u/200/200/original?country=br', '523 kcal',
         [
            new Ingredient('Pão com gergelim', 1),
            new Ingredient('Hambúrger bovino', 1),
            new Ingredient('Queijo cheddar', 2),
            new Ingredient('Cebola', 1),
            new Ingredient('Picles', 1),
            new Ingredient('Ketchup', 1),
            new Ingredient('Mostarda', 1),
         ]),
        new Recipe('McNífico Bacon', 'Não precisa nem dizer nada', 
        'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXEsSfl/200/200/original?country=br', '571 kcal',
         [
            new Ingredient('Pão com gergelim', 1),
            new Ingredient('Hambúrger bovino', 1),
            new Ingredient('Bacon saboroso', 2),
            new Ingredient('Alface Americana', 1),
            new Ingredient('Queijo cheddar', 2),
            new Ingredient('Maionese', 1),
            new Ingredient('Ketchup', 1),
            new Ingredient('Mostarda', 1),
            new Ingredient('Cebola', 1),
            new Ingredient('Tomate', 1),
         ]),
        // new Recipe('Sundae Chocolate', 'Adicionar desc', 
        // 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kpXuLeTy/200/200/original?country=br', '313 kcal'),
        // new Recipe('Top Sundae Caramelo', 'Adicionar desc', 
        // 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kpXFEpzl/200/200/original?country=br', '411 kcal'),
        // new Recipe('Casquinha Mista', 'Adicionar desc', 
        // 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kpX0NLJ6/200/200/original?country=br', '183 kcal'),
        // new Recipe('Torta de Maça', 'Adicionar desc', 
        // 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$qLX2gXaY/200/200/original?country=br', '251 kcal'),
        // new Recipe('McShake OvoMaltine', 'Adicionar desc', 
        // 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kJX0TX33/200/200/original?country=br', '548 kcal')
      ];

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipeById(id: number){
         return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
         this.recipes.push(recipe);
         this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
         this.recipes[index] = newRecipe;
         this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
         this.recipes.splice(index, 1);
         this.recipesChanged.next(this.recipes.slice());
      }
    
}