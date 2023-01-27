import { Ingredient } from "./ingredients.model";

export class Users{
  public name: string;
  public email: string;
  public uid: string;
  public ingredients: Ingredient[];

  constructor(name: string, email: string, uid: string, ingredients: Ingredient[]){
      this.name = name;
      this.email = email;
      this.uid = uid;
      this.ingredients = ingredients;
  }
}
