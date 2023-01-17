export class Recipe {
    public name: string;
    public description: string;
    public imagesPath: string;

    constructor(name: string, description: string, imagesPath: string){
        this.name = name;
        this.description = description;
        this.imagesPath = imagesPath;
    }
}