import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonBlockingResolver } from 'src/app/shared/services/resolver/non-blocking.resolver';

import { CocktailListPage } from './cocktail-list.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailListPage,
    resolve:{items:NonBlockingResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailListPageRoutingModule {}
