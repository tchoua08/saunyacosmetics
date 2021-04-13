import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsGuard } from './guards/tabs.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then(m => m.TabBarPageModule),
    canActivate:[TabsGuard]
  },
  {
    path: 'institut',
    loadChildren: () => import('./pages/institut/institut.module').then( m => m.InstitutPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./pages/bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./pages/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'voirmonprofil',
    loadChildren: () => import('./pages/voirmonprofil/voirmonprofil.module').then( m => m.VoirmonprofilPageModule)
  },
  {
    path: 'tablivraison',
    loadChildren: () => import('./pages/tablivraison/tablivraison.module').then( m => m.TablivraisonPageModule)
  },
  {
    path: 'heure',
    loadChildren: () => import('./boohoo/heure/heure.module').then( m => m.HeurePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
