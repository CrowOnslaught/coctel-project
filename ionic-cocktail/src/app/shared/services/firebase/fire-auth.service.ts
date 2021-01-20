import { LogComunicationService } from './log-comunication.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../..//model/user';

import { Plugins} from "@capacitor/core" 

const {Storage} = Plugins;


@Injectable({
  providedIn: 'root'
})
export class FireAuthService {


  constructor(private afAuth: AngularFireAuth,
              private route:Router,
              private logCom : LogComunicationService) {}

  async login(user:User) {
    try {
      await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
     return  await this.afAuth.currentUser;

    } catch (error) {
      throw error;

    }

  }
  logout(flag){
    this.afAuth.signOut();
    Storage.remove({key :"name"})
    Storage.remove({key :"email"})
    Storage.remove({key :"logged"})
    this.logCom.logIn(false)

    if(flag){
      this.route.navigate(['/login']);

    }

  }

  async register(user): Promise<any>{
    try {
      await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      const userfirebase= await this.afAuth.currentUser;
      userfirebase.updateProfile({displayName: user.name});
      this.logout(false);
      return userfirebase;

    } catch (error) {
      throw error;

    }


  }

  isLogged$():Observable<any> {
    return this.afAuth.authState.pipe(first());
  }
}
