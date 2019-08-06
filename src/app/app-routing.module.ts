import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // first one is the root path
  { path: '', redirectTo: 'recipies', pathMatch: 'full' },
  { path: 'recipies',
    children : [
    {
      path : '',
      loadChildren: './recipies/recipies.module#RecipiesPageModule'
    },
    {
      path : ':recipieId',
      loadChildren: './recipies/recipie-details/recipie-details.module#RecipieDetailsPageModule'
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
