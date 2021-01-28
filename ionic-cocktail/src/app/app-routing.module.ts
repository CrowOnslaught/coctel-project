import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
 
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./shared/pages/hero/hero.module').then( m => m.HeroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./shared/pages/tabs/tabs.module').then( m => m.TabsPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/log/login-form/login-form.module').then( m => m.LoginFormPageModule),canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/log/register-form/register-form.module').then( m => m.RegisterFormPageModule)
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
