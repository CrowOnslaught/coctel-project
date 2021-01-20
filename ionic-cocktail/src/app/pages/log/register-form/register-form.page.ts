import { FireAuthService } from './../../../shared/services/firebase/fire-auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {

  registerUser: FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router,
              private fireAuthService: FireAuthService) { }

  ngOnInit() {
    this.buildForm();
  }


  register(){
    let user = this.registerUser.value;
    let response = this.fireAuthService.register(user);
    response.then(data=>{
      this.route.navigate(["/login"]);
      //this.openSnackBar("Register Successful","successful");
    })
      .catch((error) => {
        //this.openSnackBar("Register Error","error");
    })
    //this.route.navigate(['/home']);*/
  }

  private buildForm() {
    const minPassLength = 6;
    this.registerUser = this.fb.group({
      name: ['', [
        Validators.required]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength),
      ]],
      confirm_password: ['', [Validators.required]]
    }, { validator: this.mustMatch('password', `confirm_password`) }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
//end
}
