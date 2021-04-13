import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddresselivraisonPage } from './addresselivraison.page';

const routes: Routes = [
  {
    path: '',
    component: AddresselivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddresselivraisonPageRoutingModule {}
