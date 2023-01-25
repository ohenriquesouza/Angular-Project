import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Ingredient } from "./ingredients.model";

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){}

    storeRecipes(){
        let token = this.authService.getToken();
        return this.http.put('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth=' + token, this.recipeService
        .getRecipes());
    }

    getRecipes(){
        let token = this.authService.getToken();
        this.http.get<Recipe[]>('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth='+ token).subscribe(
            (recipes) => {
               this.recipeService.setRecipes(recipes);
            }
        );    
    }

    // OLD VERSION
    // this.http.get('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth='+ token).subscribe(
    //     (response: any) => {
    //         let recipeJson = JSON.stringify(response); // <-- Pega todo o conteudo e transforma em string
    //         const recipes = JSON.parse(recipeJson); // <-- Pega a string e transforma em .json()
    //         this.recipeService.setRecipes(recipes); // <-- Finalmente, passa como .json()
    //     }
    // );
}