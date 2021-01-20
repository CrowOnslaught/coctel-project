import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.page.html',
  styleUrls: ['./cocktail-list.page.scss'],
})
export class CocktailListPage implements OnInit {

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 4;

  ingredients: Observable<any>;
  alcoholic:Observable<any>;
  category:Observable<any>;

  ingredientSelected = [];
  alcoholicSelected = '';
  categorySelected = '';
  nameSelected = '';

  constructor(private cas : CocktailApiService) { }

  ngOnInit() 
  {
    this.fetchPosts();
    this.ingredients = this.cas.getIngredientsList$();
    this.alcoholic = this.cas.getAlcoholicList$();
    this.category = this.cas.getCategoriesList$();
  }

  fetchPosts():void
  {
    this.cas.getCocktails$().subscribe(response => {
          this.POSTS = response.drinks;
        },
        error => {
          console.log(error);
        });

  }
  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }  


  openDetails(c)
  {
    console.log(c);
  }

  onIngredient($event)
  {
    this.ingredientSelected=($event.target.value);
    console.log(this.ingredientSelected);
  }
  onAlcoholic($event)
  {
    if($event.target.value != 'Any')
      this.alcoholicSelected = $event.target.value.strAlcoholic;
    else
    this.alcoholicSelected = '';
    
    console.log(this.alcoholicSelected);
  }
  onCategory($event)
  {
    if($event.target.value != 'Any')
      this.categorySelected = $event.target.value.strCategory;
    else
    this.categorySelected = '';
    
    console.log(this.categorySelected);
  }
  onName($event)
  {
    this.nameSelected = $event.target.value;
    console.log(this.nameSelected);
  }

  ingredientAlertOptions: any = {
    header: 'Ingredients',
    subHeader: 'Select all your ingredients',
    translucent: false
  };
  alcoholicAlertOptions: any = {
    header: 'Alcoholic',
    subHeader: 'Choose alcoholic or not',
    translucent: false
  };
  categoryAlertOptions: any = {
    header: 'Category',
    subHeader: 'Select a Category',
    translucent: false
  };
}
