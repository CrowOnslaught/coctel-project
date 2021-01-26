import { Injectable } from '@angular/core';
import { Plugins} from "@capacitor/core"
import { Cocktail } from '../model/cocktail';

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalCocktailsService {

  constructor() { }

  async getAllCocktails()
  {
    const l_result = await Storage.get({key:'LocalCocktails'});

    return JSON.parse(l_result.value);
  }

  async setCocktail(ct : Cocktail)
  {
    let l_result : any = await this.getAllCocktails();

    if(l_result)
    {
      if(l_result.find(e => e.idDrink == ct.idDrink))
        return;

      l_result.push(ct);
      return Storage.set({key:'LocalCocktails', value: JSON.stringify(l_result)});
    }
    else
    {
      return Storage.set({key:'LocalCocktails', value: JSON.stringify([ct])});
    }
  }

  async getFavoriteCocktails(id:string[])
  {
    if(!id)
      return [];
      
    let l_array : any = await this.getAllCocktails();
    if(l_array)
    {
      let l_result = [];
      id.forEach(value =>
        {
          let l_value = l_array.find(e => e.idDrink == value);
          if(l_value)
            l_result.push(l_value);
        })
      return l_result;
    }
  }
}
