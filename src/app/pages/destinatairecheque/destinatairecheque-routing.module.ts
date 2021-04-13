import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinatairechequePage } from './destinatairecheque.page';

const routes: Routes = [
  {
    path: '',
    component: DestinatairechequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinatairechequePageRoutingModule {}
