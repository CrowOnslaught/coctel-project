import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
 
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/pages/hero/hero.module').then( m => m.HeroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./shared/pages/tabs/tabs.module').then( m => m.TabsPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/log/login-form/login-form.module').then( m => m.LoginFormPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/log/register-form/register-form.module').then( m => m.RegisterFormPageModule),canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
