import { FireAuthService } from './shared/services/firebase/fire-auth.service';
import { LogComunicationService } from './shared/services/firebase/log-comunication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isLogged=false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private log: LogComunicationService,
    private fireAuthService:FireAuthService,
    private router: Router
  ) {
    this.initializeApp();
     this.log.isLogged$().subscribe(data =>
    {
      this.isLogged = data;
    });
  }

  logout(){
    this.fireAuthService.logout(true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
