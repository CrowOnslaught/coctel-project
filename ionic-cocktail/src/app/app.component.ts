import { FireAuthService } from './shared/services/firebase/fire-auth.service';
import { LogComunicationService } from './shared/services/firebase/log-comunication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLogged=false;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private log: LogComunicationService, 
    private router: Router,
    private fireAuthService:FireAuthService) 
    {
      SplashScreen.show({
        showDuration: 2000,
        autoHide: true
      });


      this.initializeApp();
      this.log.isLogged$().subscribe(data =>
      {
        if(data){
        this.router.navigate(['/tabs'])
        }
        this.isLogged = data;
      });
  }

  logout(){
    this.fireAuthService.logout(true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
