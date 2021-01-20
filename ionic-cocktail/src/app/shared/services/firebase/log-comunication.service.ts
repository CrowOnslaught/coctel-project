import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plugins} from "@capacitor/core" 

const {Storage} = Plugins;


@Injectable({
  providedIn: 'root'
})
export class LogComunicationService {

  isLogged = new BehaviorSubject<boolean>(false);
  constructor() {
    this.getLogged();

   }

   async getLogged(){
    const l_result = await Storage.get({key:'logged'});
    console.log(l_result.value);
    if(JSON.parse(l_result.value)==true){
      this.logIn(true);
    }

   }

  isLogged$()
  {
    return this.isLogged;
  }
  logIn(b:boolean)
  {
    this.isLogged.next(b)
  }
}
