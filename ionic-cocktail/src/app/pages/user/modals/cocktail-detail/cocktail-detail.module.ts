import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailDetailPageRoutingModule } from './cocktail-detail-routing.module';

import { CocktailDetailPage } from './cocktail-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailDetailPageRoutingModule
  ],
  declarations: [CocktailDetailPage]
})
export class CocktailDetailPageModule {}
