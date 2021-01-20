import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailListPageRoutingModule } from './cocktail-list-routing.module';

import { CocktailListPage } from './cocktail-list.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailListPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [CocktailListPage, FilterPipe]
})
export class CocktailListPageModule {}
