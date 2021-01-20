import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails:any[], ingredients: any[], alcoholic:string, category:string, name:string): any 
  {
    let l_result = cocktails;
    if(l_result == undefined)
      return null;

      console.log(ingredients);

    //filter by ingredients
    ingredients.forEach(ingredient => 
      {
        let i = ingredient.strIngredient1;
        l_result = l_result.filter(e =>
          {
            if(e.strIngredient1 == i || e.strIngredient2 == i || e.strIngredient3 == i || e.strIngredient4 == i || e.strIngredient5 == i 
              || e.strIngredient6 == i || e.strIngredient7 == i || e.strIngredient8 == i || e.strIngredient9 == i || e.strIngredient10 == i
              || e.strIngredient11 == i || e.strIngredient12 == i || e.strIngredient13 == i || e.strIngredient14 == i || e.strIngredient15 == i)
            return e;
          })
      });

    //filter by alcoholic
    if(alcoholic != '')
    {
      l_result=l_result.filter(e => 
        {          
          if(e.strAlcoholic == alcoholic)
            return e;
        });
    }

    //filter by category
    if(category != '')
    {
      l_result=l_result.filter(e => 
        {          
          if(e.strCategory == category)
            return e;
        });
    }

    //filter by name
    let l_name = name.toLowerCase();
    l_result = l_result.filter( e => 
      {
        if(e.strDrink.toLowerCase().includes(l_name))
          return e;
      });
    return l_result;
  }

}
