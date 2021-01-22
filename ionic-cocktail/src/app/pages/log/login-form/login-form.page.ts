import { LogComunicationService } from './../../../shared/services/firebase/log-comunication.service';
import { FireAuthService } from './../../../shared/services/firebase/fire-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import "@codetrix-studio/capacitor-google-auth";

import { Plugins} from "@capacitor/core" 


const {Storage} = Plugins;
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  loginUser: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router,
              private fireAuthService:FireAuthService,
              private logCom : LogComunicationService)
  {

   
  }
  ngOnInit() {
    this.buildForm();
  }
  async loginWithGoogle(){
    const googleUser = await Plugins.GoogleAuth.signIn();
    console.log("userGoogle : ", googleUser );
    
    /*let user = this.loginUser.value;
    let response = this.fireAuthService.loginWithGoogle();
    response.then((data)=>{
      //this.logCom.logIn(true);
     // Storage.set({key:'logged', value: JSON.stringify(true)});
      /*data.providerData.forEach(function (profile) {
        Storage.set({key:'name', value: JSON.stringify(profile.displayName)});
        Storage.set({key:'email', value: JSON.stringify(profile.email)});
      });
      //this.openSnackBar("Loggin Successful","successful");
     // this.route.navigate(['/tabs'])
     console.log("--------"+data);
    }).catch((error)=>{
      console.log(error)

      //this.openSnackBar("Register Error","error");
    });*/
  }
  loginWithFacebook(){
    let user = this.loginUser.value;
    let response = this.fireAuthService.loginWithFacebook();
   
  }
  login(){
    let user = this.loginUser.value;
    let response = this.fireAuthService.login(user);
    response.then(data=>{
      this.logCom.logIn(true);
      Storage.set({key:'logged', value: JSON.stringify(true)});
      data.providerData.forEach(function (profile) {
        Storage.set({key:'name', value: JSON.stringify(profile.displayName)});
        Storage.set({key:'email', value: JSON.stringify(profile.email)});
      });
      //this.openSnackBar("Loggin Successful","successful");
      this.route.navigate(['/tabs'])
    }).catch((error)=>{
      //this.openSnackBar("Register Error","error");
    });
  }

  private buildForm(){
    const minPassLength = 6;
    this.loginUser = this.fb.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength),
      ]]
    });
  }
}
