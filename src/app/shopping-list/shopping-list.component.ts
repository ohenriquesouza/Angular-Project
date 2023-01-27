import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  ingredients!: Ingredient[];

  constructor(private dataStorage: DataStorageService, private slService: ShoppingListService){}

  ngOnInit(){
    this.dataStorage.getUserIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    // this.ingredients = this.slService.getIngredients();
  }
  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
