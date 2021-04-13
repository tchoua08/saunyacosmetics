import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacelivraisonPage } from './placelivraison.page';

const routes: Routes = [
  {
    path: '',
    component: PlacelivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacelivraisonPageRoutingModule {}
