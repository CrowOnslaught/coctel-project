import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourCocktailsPageRoutingModule } from './your-cocktails-routing.module';

import { YourCocktailsPage } from './your-cocktails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourCocktailsPageRoutingModule
  ],
  declarations: [YourCocktailsPage]
})
export class YourCocktailsPageModule {}
