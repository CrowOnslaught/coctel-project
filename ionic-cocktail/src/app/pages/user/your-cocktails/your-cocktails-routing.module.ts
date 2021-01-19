import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourCocktailsPage } from './your-cocktails.page';

const routes: Routes = [
  {
    path: '',
    component: YourCocktailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourCocktailsPageRoutingModule {}
