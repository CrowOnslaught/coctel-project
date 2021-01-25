import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailDetailPage } from 'src/app/pages/user/modals/cocktail-detail/cocktail-detail.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: 
    [
      {
        path: 'cocktails',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../../../pages/user/cocktail-list/cocktail-list.module').then( m => m.CocktailListPageModule)
          }
        ],
      },
      {
        path: 'profile',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../../../pages/user/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ],
      },
      {
        path: 'yourCocktails',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../../../pages/user/your-cocktails/your-cocktails.module').then( m => m.YourCocktailsPageModule)
          }
        ],
      },
    ]
  },
  {
    path:'',
    redirectTo:'tabs/cocktails',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
