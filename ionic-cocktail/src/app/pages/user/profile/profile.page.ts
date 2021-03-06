import { User } from './../../../shared/model/user';
import { FireAuthService } from './../../../shared/services/firebase/fire-auth.service';
import { PhotoService } from './../../../shared/services/photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateProfilePage } from '../modals/update-profile/update-profile.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  test;
  user:User;
  constructor(private photoService: PhotoService,
              private fireAuthService: FireAuthService,
              private mc : ModalController) { }

  ngOnInit() {
    this.getUser();
  }
//data.providerData[0].email
printUser(){
  let response = this.fireAuthService.getCurrentUser();
    response.then(data=>{
      console.log("AndroidJordi",data);
      console.log(data.providerData[0])
      let dataUser = data.providerData[0];
      //this.user = {name:dataUser.displayName,email:dataUser.email,img: dataUser.photoURL,password:""}
      //this.updatefirstPhoto();

    }).catch((error)=>{
      console.log(error)
      //this.openSnackBar("Register Error","error");
    });
}
  getUser(){
    let response = this.fireAuthService.getCurrentUser();
    response.then(data=>{

      console.log(data.providerData[0])
      let dataUser = data.providerData[0];
      this.user = {name:dataUser.displayName,email:dataUser.email,img: dataUser.photoURL,password:""}
     // this.updatefirstPhoto();

    }).catch((error)=>{
      console.log(error)
      //this.openSnackBar("Register Error","error");
    });
  }


  async updatePhoto(data){
    const userfirebase= await this.fireAuthService.getCurrentUser()
    userfirebase.updateProfile({photoURL:data});
    this.user.img = data;

  }
  addPhotoToGallery() {
    let image = this.photoService.addNewToGallery();
    image.then((data) => {
      this.updatePhoto(data);
    });
  }

  async newUpdateProfile()
  {
    const l_modal = await this.mc.create
    ({
      component:UpdateProfilePage,
    });
    l_modal.present();
    const { data } = await l_modal.onWillDismiss();
    if(data!=null){
      if(data.flag){

        this.user.name=data.name
      }
    }
    
  }

}
