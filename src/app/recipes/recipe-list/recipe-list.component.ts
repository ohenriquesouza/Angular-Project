import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Bife', 'Completo e de respeito', 
    'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2019/08/din1135-sustenta5.jpg'),
    new Recipe('Strogonoff', 'Simples e fácil', 
    'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75'),
    new Recipe('Hambúrger', 'Saboroso e barato', 
    'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-hamburger:product-header-desktop?wid=829&hei=455&dpr=off')
  ];

  constructor() {}
}
