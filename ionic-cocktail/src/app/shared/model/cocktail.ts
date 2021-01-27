import { FormGroup } from "@angular/forms";

export class Cocktail {
  idDrink:string;
  strDrink:string; //name
  strCategory:string;
  strAlcoholic:string;
  strInstructions:string;
  strDrinkThumb:string; //image url

  strIngredient1:string;
  strIngredient2:string;
  strIngredient3:string;
  strIngredient4:string;
  strIngredient5:string;
  strIngredient6:string;
  strIngredient7:string;
  strIngredient8:string;
  strIngredient9:string;
  strIngredient10:string;
  strIngredient11:string;
  strIngredient12:string;
  strIngredient13:string;
  strIngredient14:string;
  strIngredient15:string;

  strMeasure1:string;
  strMeasure2:string;
  strMeasure3:string;
  strMeasure4:string;
  strMeasure5:string;
  strMeasure6:string;
  strMeasure7:string;
  strMeasure8:string;
  strMeasure9:string;
  strMeasure10:string;
  strMeasure11:string;
  strMeasure12:string;
  strMeasure13:string;
  strMeasure14:string;
  strMeasure15:string;

  constructor(form : FormGroup)
  {
  this.idDrink = form.value.name;
  this.strDrink = form.value.name; //name
  this.strCategory = form.value.category;
  this.strAlcoholic = form.value.alcoholic;
  this.strInstructions = form.value.instructions
  this.strDrinkThumb = form.value.image; //image url

  this.strIngredient1  = form.value.ingredient0;
  this.strIngredient2  = form.value.ingredient1;
  this.strIngredient3  = form.value.ingredient2;
  this.strIngredient4  = form.value.ingredient3;
  this.strIngredient5  = form.value.ingredient4;
  this.strIngredient6  = form.value.ingredient5;
  this.strIngredient7  = form.value.ingredient6;
  this.strIngredient8  = form.value.ingredient7;
  this.strIngredient9  = form.value.ingredient8;
  this.strIngredient10 = form.value.ingredient9;
  this.strIngredient11 = form.value.ingredient10;
  this.strIngredient12 = form.value.ingredient11;
  this.strIngredient13 = form.value.ingredient12;
  this.strIngredient14 = form.value.ingredient13;
  this.strIngredient15 = form.value.ingredient14;

  this.strMeasure1 = form.value.amount0;
  this.strMeasure2 = form.value.amount1;
  this.strMeasure3 = form.value.amount2;
  this.strMeasure4 = form.value.amount3;
  this.strMeasure5 = form.value.amount4;
  this.strMeasure6 = form.value.amount5;
  this.strMeasure7 = form.value.amount6;
  this.strMeasure8 = form.value.amount7;
  this.strMeasure9 = form.value.amount8;
  this.strMeasure10 = form.value.amount9;
  this.strMeasure11 = form.value.amount10;
  this.strMeasure12 = form.value.amount11;
  this.strMeasure13 = form.value.amount12;
  this.strMeasure14 = form.value.amount13;
  this.strMeasure15 = form.value.amount14;
  }

}
