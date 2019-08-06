import { Injectable } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipies: Recipie [] = [
    {
      id: '1',
      title: 'Qenoa',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://static.wixstatic.com/media/26357d_d36a384ac4944de690c0197c871db08d~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/26357d_d36a384ac4944de690c0197c871db08d~mv2_d_6000_4000_s_4_2.webp',
      ingredients: ['Qenoa', 'tomato'],
    },
    {
      id: '2',
      title: 'Noddels',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://static.wixstatic.com/media/26357d_a899def1cf3a41fba74e5762efff0c38~mv2_d_5584_3723_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/26357d_a899def1cf3a41fba74e5762efff0c38~mv2_d_5584_3723_s_4_2.webp',
      ingredients: ['Noddels', 'garlic'],
    },
    {
      id: '3',
      title: 'Curry',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://static.wixstatic.com/media/26357d_3d4a2c7dd9ae43f5b8f74fbe6b179f74~mv2_d_5370_3580_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/26357d_3d4a2c7dd9ae43f5b8f74fbe6b179f74~mv2_d_5370_3580_s_4_2.jpg',
      ingredients: ['rice', 'suggar'],
    },
    {
      id: '4',
      title: 'Salad rolls',
      // tslint:disable-next-line: max-line-length
      imgUrl: 'https://static.wixstatic.com/media/26357d_65d7769144e548b58eca294fba5db587~mv2_d_4000_6000_s_4_2.jpg/v1/fill/w_630,h_945,al_c,q_85,usm_0.66_1.00_0.01/26357d_65d7769144e548b58eca294fba5db587~mv2_d_4000_6000_s_4_2.webp',
      ingredients: ['rolls', 'Peanut Hoisin Sauce'],
    }
];
  constructor() { }
  getAllRecipes() {
    return[...this.recipies];
  }

  getRecipe(recipieId: string) {
    return{...this.recipies.find(recipe => {
      return recipe.id === recipieId;
    })};
  }

  deleteRecipe(recipieId: string) {
    this.recipies = this.recipies.filter(recipe => {
      return recipe.id !== recipieId;
    });
  }
}
