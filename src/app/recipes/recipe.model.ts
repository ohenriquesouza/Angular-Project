export class Recipe {
    public name: string;
    public description: string;
    public imagesPath: string;
    public kcal: string;

    constructor(name: string, description: string, imagesPath: string, kcal: string){
        this.name = name;
        this.description = description;
        this.imagesPath = imagesPath;
        this.kcal = kcal;
    }
}