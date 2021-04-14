import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementservicePage } from './paiementservice.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementservicePageRoutingModule {}
