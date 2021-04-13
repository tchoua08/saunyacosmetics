import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffrirservicedestinatairechequePage } from './offrirservicedestinatairecheque.page';

const routes: Routes = [
  {
    path: '',
    component: OffrirservicedestinatairechequePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffrirservicedestinatairechequePageRoutingModule {}
