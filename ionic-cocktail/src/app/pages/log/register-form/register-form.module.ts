import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFormPageRoutingModule } from './register-form-routing.module';

import { RegisterFormPage } from './register-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterFormPage]
})
export class RegisterFormPageModule {}
