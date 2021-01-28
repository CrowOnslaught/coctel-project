import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireAuthService } from '../services/firebase/fire-auth.service';
import { LogComunicationService } from '../services/firebase/log-comunication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authFireService: FireAuthService,
     private log: LogComunicationService,     private router: Router) { }

    async canActivate(){
      const user = await this.authFireService.isLogged$().toPromise();
  
  
        if (user && user.uid) {
          this.log.logIn(true)

          this.router.navigate(['/tabs'])
          
           return false
        }
       
  
       return true;
    

   }
  }

