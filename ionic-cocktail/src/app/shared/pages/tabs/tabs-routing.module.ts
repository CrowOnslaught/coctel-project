import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  /*
    {
    path: 'cocktail-list',
    loadChildren: () => import('./pages/user/cocktail-list/cocktail-list.module').then( m => m.CocktailListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'your-cocktails',
    loadChildren: () => import('./pages/user/your-cocktails/your-cocktails.module').then( m => m.YourCocktailsPageModule)
  },
  {
    path: 'cocktail-detail',
    loadChildren: () => import('./pages/user/modals/cocktail-detail/cocktail-detail.module').then( m => m.CocktailDetailPageModule)
  },
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
