import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailApiService } from '../cocktail-api.service';

@Injectable({
  providedIn: 'root'
})
export class NonBlockingResolver implements Resolve<Observable<any>>{

  constructor(private api:CocktailApiService) { }

  resolve(){
    const dataObservable = this.api.getCocktails$();

    const observablePromise = Promise.resolve(dataObservable);
    return observablePromise;
  }
}
