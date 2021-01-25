import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yourCTfilter'
})
export class YourCTfilterPipe implements PipeTransform {

  transform(cocktails:any[], name:string): any 
  {
    let l_result = cocktails;
    if(l_result == undefined)
      return null;


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
