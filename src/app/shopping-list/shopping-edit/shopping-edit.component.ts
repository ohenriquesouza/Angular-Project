import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs/Subscription';
import { ExpressionType } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') slForm!: NgForm;
  subscription!: Subscription;
  editMode: boolean = false;
  editItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private slService: ShoppingListService){

  }
  ngOnInit(){

    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    );
  }
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount); //<--- valores herdados do formulario HTML
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
      form.reset();
      this.editMode = false;
    }else{
      this.slService.addIngredient(newIngredient);
      form.reset();
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem(){
    this.slService.deleteItem(this.editItemIndex);
    this.onClear();
  }
}
