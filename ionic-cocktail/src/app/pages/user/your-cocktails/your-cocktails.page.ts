import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { CocktailApiService } from 'src/app/shared/services/cocktail-api.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { LocalCocktailsService } from 'src/app/shared/services/local-cocktails.service';
import { CocktailDetailPage } from '../modals/cocktail-detail/cocktail-detail.page';
import { CreateCocktailPage } from '../modals/create-cocktail/create-cocktail.page';

@Component({
  selector: 'app-your-cocktails',
  templateUrl: './your-cocktails.page.html',
  styleUrls: ['./your-cocktails.page.scss'],
})
export class YourCocktailsPage implements OnInit {
  
  favoriteCT: any[] = [];
  localCT: any[] = [];
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 6;
  
  filterSelected : any;
  nameSelected: any = "";

  constructor(private lc: LocalCocktailsService,private cas : CocktailApiService, private fs : FavoriteService, private mc : ModalController, private route : ActivatedRoute) { }

  ngOnInit()
  {
    this.route.queryParams.subscribe(params => {
      this.fetchPosts();
    });
  }

  async fetchPosts()
  {
    let l_favorites  = await this.fs.getAllFavorite();
    let l_localfavorites = await this.lc.getFavoriteCocktails(l_favorites);
    
    this.cas.getCocktails$().subscribe( response =>
      {
        let l_local = this.lc.getAllCocktails();
        l_local.then( localdata =>
          {

          if(l_favorites)
            this.favoriteCT = [...response.drinks.filter( e =>l_favorites.includes(e.idDrink)), ... (l_localfavorites != null? l_localfavorites : [])];
          
          if(localdata)
            this.localCT = localdata;

          if(localdata && l_favorites)
          {
            let l_array = [];

            this.localCT.forEach(value =>
              {
                let found = !this.favoriteCT.find(e => e.idDrink == value.idDrink);
                if(found)
                l_array.push(value);
              })
            this.POSTS = [...this.favoriteCT, ...l_array];
          }
          else
            this.POSTS = [...this.favoriteCT, ...this.localCT];
          }
        );
      });

  }
  onTableDataChange(event){
    this.page = event;
  }  

  async openDetails(c)
  {
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
    switch(this.filterSelected)
    {
      case 0:
        this.POSTS = [...this.favoriteCT];

        this.localCT.forEach(value =>
          {
            let found = !this.POSTS.find(e => e.idDrink == value.idDrink);
            if(found)
              this.POSTS.push(value);
          });
          break;
      case 1:
        this.POSTS = [...this.favoriteCT];
        break;
      case 2:
        this.POSTS = [...this.localCT];
        break;
    }
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
