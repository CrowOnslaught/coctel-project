import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { CocktailDetailPage } from '../modals/cocktail-detail/cocktail-detail.page';
import { CreateCocktailPage } from '../modals/create-cocktail/create-cocktail.page';

@Component({
  selector: 'app-your-cocktails',
  templateUrl: './your-cocktails.page.html',
  styleUrls: ['./your-cocktails.page.scss'],
})
export class YourCocktailsPage implements OnInit {
  
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 6;
  
  filterSelected : any;
  nameSelected: any = "";

  constructor(private cas : CocktailApiService, private fs : FavoriteService, private mc : ModalController, private route : ActivatedRoute) { }

  ngOnInit()
  {
    this.route.queryParams.subscribe(params => {
      this.fetchPosts();
    });
  }

  async fetchPosts()
  {
    let l_favorites  = await this.fs.getAllFavorite();
    
    this.cas.getCocktails$().subscribe( response =>
      {
        this.POSTS = response.drinks.filter( e =>l_favorites.includes(e.idDrink));
      })

  }
  onTableDataChange(event){
    this.page = event;
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
  async newCocktail()
  {
    const l_modal = await this.mc.create
    ({
      component:CreateCocktailPage,
    });
    l_modal.present();    }

  onFilter($event)
  {
    this.page=1;
    this.filterSelected=($event.target.value);
  }
  onName($event)
  {
    this.page=1;
    this.nameSelected = $event.target.value;
  }

  selectAlertOptions: any = {
    header: 'Filter',
    translucent: false
  };
}
