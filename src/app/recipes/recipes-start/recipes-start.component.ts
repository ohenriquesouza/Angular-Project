import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipes-start',
  templateUrl: './recipes-start.component.html',
  styleUrls: ['./recipes-start.component.css']
})
export class RecipesStartComponent implements OnInit{
  constructor(private dataStorageService: DataStorageService){}

  ngOnInit() {
    this.dataStorageService.getRecipes();
  }
}
