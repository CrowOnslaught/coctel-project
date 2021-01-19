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

  cocktails: Observable<any>;

  constructor(private cas : CocktailApiService) { }

  ngOnInit() 
  {

    this.cocktails = this.cas.getCocktails$()
      .pipe
      (
        map((c:any) =>
        {
          console.log(c);
          c.drinks.map
          (
            e=>
            {
              console.log(e);
              return e;
            }
          )
          return c;
        })
      );
  }

  openDetails(c)
  {
    console.log(c);
  }
}
