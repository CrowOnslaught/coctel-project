import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  loginUser: FormGroup;

  constructor(private fb : FormBuilder)
  {

    this.loginUser = this.fb.group
    ({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required],
    });
  }
  ngOnInit() {
  }

  login()
  {}
}
