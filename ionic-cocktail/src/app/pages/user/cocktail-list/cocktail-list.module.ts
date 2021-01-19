import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailListPageRoutingModule } from './cocktail-list-routing.module';

import { CocktailListPage } from './cocktail-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailListPageRoutingModule
  ],
  declarations: [CocktailListPage]
})
export class CocktailListPageModule {}
