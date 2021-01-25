import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourCocktailsPageRoutingModule } from './your-cocktails-routing.module';

import { YourCocktailsPage } from './your-cocktails.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { YourCTfilterPipe } from 'src/app/shared/pipes/your-ctfilter.pipe';
import { CreateCocktailPage } from '../modals/create-cocktail/create-cocktail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourCocktailsPageRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  declarations: [YourCocktailsPage, YourCTfilterPipe, CreateCocktailPage]
})
export class YourCocktailsPageModule {}
