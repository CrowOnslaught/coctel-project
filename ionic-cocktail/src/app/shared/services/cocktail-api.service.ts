import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {

  private _url : string = "https://www.thecocktaildb.com/api/json/v1/1/";

  constructor(private http : HttpClient) {}

  getCocktails$(): Observable<any>
  {
    return this.http.get(this._url+"search.php?s=");
  }

  getCocktailById$(id): Observable<any>
  {
    return this.http.get(this._url+"lookup.php?i="+id);
  }

  getCocktailByName$(name): Observable<any>
  {
    return this.http.get(this._url+"search.php?s="+name);
  }

  getRandomCocktail$(): Observable<any>
  {
    return this.http.get(this._url+"random.php");
  }

  getCategoriesList$(): Observable<any>
  {
    return this.http.get(this._url+"list.php?c=list");
  }
  getIngredientsList$(): Observable<any>
  {
    return this.http.get(this._url+"list.php?i=list");
  }
  getAlcoholicList$(): Observable<any>
  {
    return this.http.get(this._url+"list.php?a=list");
  }
}
