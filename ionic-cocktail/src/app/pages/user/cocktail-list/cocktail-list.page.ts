import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';
import { map } from 'rxjs/operators';
import { CocktailDetailPage } from '../modals/cocktail-detail/cocktail-detail.page';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.page.html',
  styleUrls: ['./cocktail-list.page.scss'],
})
export class CocktailListPage implements OnInit {

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 6;

  ingredients: Observable<any>;
  alcoholic:Observable<any>;
  category:Observable<any>;

  ingredientSelected = [];
  alcoholicSelected = '';
  categorySelected = '';
  nameSelected = '';

  routeResolveData :any;
  sceneLoaded = false;

  constructor(private route: ActivatedRoute,private cas : CocktailApiService, private mc : ModalController) { }

  ngOnInit() 
  {
    //Non-Blocking resolver
    if(this.route && this.route.data){
  
      const promiseObservable = this.route.data;    

      if(promiseObservable){

        promiseObservable.subscribe(promiseValue =>{
          const dataObservable = promiseValue['items'];
          if(dataObservable){
            dataObservable.subscribe(observableValue =>{
              const pageData: any = observableValue;
              if(pageData){
                this.routeResolveData = pageData;
              }
            });
          }
        });
      }
    }
    //Resolver End

    this.fetchPosts();
    this.ingredients = this.cas.getIngredientsList$()
                                .pipe(
                                  map(e =>
                                    {
                                      e.drinks.sort(function(a, b){
                                        if(a.strIngredient1.toLowerCase() < b.strIngredient1.toLowerCase()) { return -1; }
                                        if(a.strIngredient1.toLowerCase() > b.strIngredient1.toLowerCase()) { return 1; }
                                        return 0;
                                    })
                                    return e;
                                    })
                                );
    this.alcoholic = this.cas.getAlcoholicList$();
    this.category = this.cas.getCategoriesList$();
    setTimeout(() => {
    this.sceneLoaded= true;  
  }, (1000));

  }

  fetchPosts():void
  {
    this.cas.getCocktails$().subscribe(response => {
          this.POSTS = response.drinks;
          console.log(this.POSTS);
        },
        error => {
          console.log(error);
        });

  }
  onTableDataChange(event){
    this.page = event;
    this.sceneLoaded =false;

    setTimeout(() => {
      this.sceneLoaded= true;  
    }, (400));
  }  


  async openDetails(c)
  {
    console.log(c);
      const l_modal = await this.mc.create
      ({
        component:CocktailDetailPage,
        componentProps: 
        {
          'cocktail': c
        }
      });
      l_modal.present();  
  }

  onIngredient($event)
  {
    this.page = 1;

    this.ingredientSelected=($event.target.value);
  }
  onAlcoholic($event)
  {
    this.page = 1;

    if($event.target.value != 'Any')
      this.alcoholicSelected = $event.target.value.strAlcoholic;
    else
    this.alcoholicSelected = '';
    }
  onCategory($event)
  {
    this.page = 1;

    if($event.target.value != 'Any')
      this.categorySelected = $event.target.value.strCategory;
    else
    this.categorySelected = '';
    }
  onName($event)
  {
    this.page = 1;

    this.nameSelected = $event.target.value;
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
