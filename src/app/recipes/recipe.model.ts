import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagesPath: string;
    public kcal: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagesPath: string, kcal: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagesPath = imagesPath;
        this.kcal = kcal;
        this.ingredients = ingredients; 
    }
}