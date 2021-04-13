import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutercarnetadressePage } from './ajoutercarnetadresse.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutercarnetadressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutercarnetadressePageRoutingModule {}
