import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "./ingredients.model";
import { Users } from "./user.model";


@Injectable()
export class DataStorageService {

    constructor(private shopping: ShoppingListService,
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService,
        ){}

    storeRecipes(){
        let token = this.authService.getToken();
        return this.http.put('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth=' + token, this.recipeService
        .getRecipes());
    }

    storeIngredientes(){
      let token = this.authService.getuid();
      return this.http.put(
          "https://pdcase-ng-http-default-rtdb.firebaseio.com/users/" + token + "/ingredients.json",
          this.shopping.getIngredients()
        );
    }

    storeNewUsers(user: Users, userToken: string | undefined){
      return this.http.put('https://pdcase-ng-http-default-rtdb.firebaseio.com/users/' + userToken +  '.json', user);
    }

    getUserIngredients(){
      let token = this.authService.getToken();
      let uid = this.authService.getuid();
      this.http.get<Ingredient[]>('https://pdcase-ng-http-default-rtdb.firebaseio.com/users/' +  uid  +  '/ingredients.json?auth=' + token)
        .subscribe(
          (ingredients) => {
            this.shopping.setIngredients(ingredients);
            console.log(ingredients);
          }
        );
    }

    getRecipes(){
        let token = this.authService.getToken();
        this.http.get<Recipe[]>('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth='+ token)
        .subscribe(
          (recipes) => {
            this.recipeService.setRecipes(recipes);
            console.log(recipes);
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

    //ANOTHER
    // this.http.get<Recipe[]>('https://pdcase-ng-http-default-rtdb.firebaseio.com/recipes.json?auth='+ token).subscribe(
    //     (recipes) => {
    //        this.recipeService.setRecipes(recipes);
    //     }
    // );
}
