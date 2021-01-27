import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.page.html',
  styleUrls: ['./cocktail-detail.page.scss'],
})
export class CocktailDetailPage implements OnInit {

  cocktail:any;
  ingredients: string[] = [];
  measures:  string[] = [];

  isFavorite = false;


  constructor(private mc :ModalController, private fs :FavoriteService) { }

  async ngOnInit()
  {
    if(this.cocktail.strIngredient1 != null)
      this.ingredients.push(this.cocktail.strIngredient1);
    if(this.cocktail.strIngredient2 != null)
      this.ingredients.push(this.cocktail.strIngredient2);
    if(this.cocktail.strIngredient3 != null)
      this.ingredients.push(this.cocktail.strIngredient3);
    if(this.cocktail.strIngredient4 != null)
      this.ingredients.push(this.cocktail.strIngredient4);
    if(this.cocktail.strIngredient5 != null)
      this.ingredients.push(this.cocktail.strIngredient5);
    if(this.cocktail.strIngredient6 != null)
      this.ingredients.push(this.cocktail.strIngredient6);
    if(this.cocktail.strIngredient7 != null)
      this.ingredients.push(this.cocktail.strIngredient7);
    if(this.cocktail.strIngredient8 != null)
      this.ingredients.push(this.cocktail.strIngredient8);
    if(this.cocktail.strIngredient9 != null)
      this.ingredients.push(this.cocktail.strIngredient9);
    if(this.cocktail.strIngredient10 != null)
      this.ingredients.push(this.cocktail.strIngredient10);
    if(this.cocktail.strIngredient11 != null)
      this.ingredients.push(this.cocktail.strIngredient11);
    if(this.cocktail.strIngredient12 != null)
      this.ingredients.push(this.cocktail.strIngredient12);
    if(this.cocktail.strIngredient13 != null)
      this.ingredients.push(this.cocktail.strIngredient13);
    if(this.cocktail.strIngredient14 != null)
      this.ingredients.push(this.cocktail.strIngredient14);
    if(this.cocktail.strIngredient15 != null)
      this.ingredients.push(this.cocktail.strIngredient15);

    if(this.cocktail.strMeasure1 != null)
      this.measures.push(this.cocktail.strMeasure1);
    if(this.cocktail.strMeasure2 != null)
      this.measures.push(this.cocktail.strMeasure2);
    if(this.cocktail.strMeasure3 != null)
      this.measures.push(this.cocktail.strMeasure3);
    if(this.cocktail.strMeasure4 != null)
      this.measures.push(this.cocktail.strMeasure4);
    if(this.cocktail.strMeasure5 != null)
      this.measures.push(this.cocktail.strMeasure5);
    if(this.cocktail.strMeasure6 != null)
      this.measures.push(this.cocktail.strMeasure6);
    if(this.cocktail.strMeasure7 != null)
      this.measures.push(this.cocktail.strMeasure7);
    if(this.cocktail.strMeasure8 != null)
      this.measures.push(this.cocktail.strMeasure8);
    if(this.cocktail.strMeasure9 != null)
      this.measures.push(this.cocktail.strMeasure9);
    if(this.cocktail.strMeasure10 != null)
      this.measures.push(this.cocktail.strMeasure10);
    if(this.cocktail.strMeasure11 != null)
      this.measures.push(this.cocktail.strMeasure11);
    if(this.cocktail.strMeasure12 != null)
      this.measures.push(this.cocktail.strMeasure12);
    if(this.cocktail.strMeasure13 != null)
      this.measures.push(this.cocktail.strMeasure13);
    if(this.cocktail.strMeasure14 != null)
      this.measures.push(this.cocktail.strMeasure14);
    if(this.cocktail.strMeasure15 != null)
      this.measures.push(this.cocktail.strMeasure15);

      this.isFavorite = await this.fs.isFavorite(this.cocktail.idDrink);

  }

  close()
  {
    this.mc.dismiss({
      flag: true,
    });  
  }

  async addFavorite(fav :boolean)
  {
    if(fav)
    {
      await this.fs.getfavoriteById(this.cocktail.idDrink);
      this.isFavorite = true;
    }
    else
    {
      this.fs.removefavoriteById(this.cocktail.idDrink);
      this.isFavorite = false;
    }
  } 
}
