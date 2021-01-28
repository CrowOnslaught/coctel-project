import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FireAuthService } from '../../../../shared/services/firebase/fire-auth.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {


  profileForm : FormGroup;
  user;
  constructor(
    private fb: FormBuilder,
    private fireAuthService: FireAuthService,
    private mc : ModalController,
  ) { }

  ngOnInit() {
    this.getUser();
    this.buildForm();

  }
  showInfo(){
    console.log(this.profileForm.value)
  }
  update(){
    let changes = this.profileForm.value;
    this.fireAuthService.updateProfile(changes);
    this.mc.dismiss({
      flag: true,
      name: this.profileForm.get("name").value
    });
  }

  getUser(){
    let response = this.fireAuthService.getCurrentUser();
    response.then(data=>{

      console.log(data.providerData[0])
      let dataUser = data.providerData[0];
      this.user = {name:dataUser.displayName,email:dataUser.email,img: dataUser.photoURL,password:"",phone:dataUser.phoneNumber}
     // this.updatefirstPhoto();
      this.profileForm.get("name").setValue(this.user.name);
    }).catch((error)=>{
      console.log(error)
      //this.openSnackBar("Register Error","error");
    });
  }
  close()
  {
    this.mc.dismiss();
  }
  private buildForm(){
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
    });
  }
}
