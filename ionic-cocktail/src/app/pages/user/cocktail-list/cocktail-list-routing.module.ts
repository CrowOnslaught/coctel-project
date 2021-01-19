import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailListPage } from './cocktail-list.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailListPageRoutingModule {}
