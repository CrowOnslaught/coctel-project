
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireAuthService } from './../services/firebase/fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authFireService: FireAuthService, private router: Router) { }

 async canActivate(){
    const user = await this.authFireService.isLogged$().toPromise();


      if (user && user.uid) {
        console.log("logout 1");

         return true
      }
      this.router.navigate(['/login'])

     return false;
  
 /*Logout() {
    // (logout logic here)
        this.router.navigate(['/login'])
    }
*/
 }
}
