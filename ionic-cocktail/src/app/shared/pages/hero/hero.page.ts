import { Component, OnInit } from '@angular/core';
import { CocktailApiService } from '../../services/cocktail-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {

  image : string;
  text: string = '';

  constructor(private cas : CocktailApiService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.route.queryParams.subscribe(params => {
      this.fetchCocktail();
    });
  }

  async fetchCocktail()
  {
    await this.delay(500);

    let l_cocktail :any;
    this.cas.getRandomCocktail$().subscribe(response => {
      l_cocktail = response.drinks[0];
      this.image = l_cocktail.strDrinkThumb;
      this.text = l_cocktail.strDrink;
    },
    error => {
      console.log(error);
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
