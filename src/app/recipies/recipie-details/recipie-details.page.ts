import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.page.html',
  styleUrls: ['./recipie-details.page.scss'],
})
export class RecipieDetailsPage implements OnInit, OnDestroy {
  loadedRecipe: Recipie;
  constructor(
    private activatedRoute: ActivatedRoute ,
    private recipesService: RecipesService ,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (! paramMap.has('recipieId')) {
        return;
      }
      const recipieId = paramMap.get('recipieId');
      this.loadedRecipe = this.recipesService.getRecipe(recipieId);
    });
  }
  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you sure you want to delete the recipe ?!!',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipies']);
          }
        }
      ]
    })
    .then(alertResponse => {
      alertResponse.present();
    });
  }

}
