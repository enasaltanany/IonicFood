import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit, OnDestroy  {
  recipies: Recipie [];

  constructor(  private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipies = this.recipesService.getAllRecipes();
  }

 
  ionViewWillEnter() {
    this.recipies = this.recipesService.getAllRecipes();
    console.log('will Enter');
  }
}
