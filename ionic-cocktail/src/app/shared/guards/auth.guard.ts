
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

    let url =this.router.getCurrentNavigation().extractedUrl;

      if (user && user.uid) {
        console.log("logout 1");

        //  if you are logged you can navigate to /tabs/etc. 
        if (url.toString().indexOf("tabs")!=-1) {
          return true;


        }else{
          this.router.navigate(['/login']);
          return false;

        }

      }
      else {
        console.log("logout 2");

        console.log("navigate : ",url.toString())
        //if you not logged you can't navigate to /tabs redirect to login
        if (url.toString().indexOf("tabs")!=-1) {
          this.router.navigate(['/login']);

          return false;
        }
        console.log("False session 2")

        return true;

      }

     return false;
  }
 /*Logout() {
    // (logout logic here)
        this.router.navigate(['/login'])
    }
*/
  
}
