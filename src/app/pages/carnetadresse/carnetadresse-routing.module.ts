import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnetadressePage } from './carnetadresse.page';

const routes: Routes = [
  {
    path: '',
    component: CarnetadressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnetadressePageRoutingModule {}
