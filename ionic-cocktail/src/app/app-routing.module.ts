import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/pages/hero/hero.module').then( m => m.HeroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./shared/pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/log/login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/log/register-form/register-form.module').then( m => m.RegisterFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
