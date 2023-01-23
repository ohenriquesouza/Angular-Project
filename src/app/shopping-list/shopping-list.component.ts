import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[];

  constructor(private slService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }


}
