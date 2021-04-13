import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilPage } from './profil.page';
import { MonprofilGuard } from '../guards/monprofil.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/monprofil/monprofil.module').then( m => m.MonprofilPageModule),
    canActivate:[MonprofilGuard]
  } ,{
        path: 'tabs/profil/connexion',
        loadChildren: () => import('../pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
      }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
