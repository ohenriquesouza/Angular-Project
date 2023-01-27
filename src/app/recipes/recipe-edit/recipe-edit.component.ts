import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id!: number;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  constructor(private dataStorage: DataStorageService, private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        // console.log(this.editMode);
      }
    );
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeKcal = '';
    let recipeIngredient =  new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagesPath;
      recipeDescription = recipe.description;
      recipeKcal = recipe.kcal;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          (recipeIngredient as unknown as FormArray).push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'kcal': new FormControl(recipeKcal,Validators.required),
      'ingredients': recipeIngredient
    });
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['kcal'],
      this.recipeForm.value['ingredients']
      );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.dataStorage.storeRecipes()
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
    }else{
      this.recipeService.addRecipe(newRecipe);
      this.dataStorage.storeRecipes()
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
    }
    this.onCancel();
  }

  getControls(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
