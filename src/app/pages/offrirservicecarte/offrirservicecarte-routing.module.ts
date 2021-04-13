import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffrirservicecartePage } from './offrirservicecarte.page';

const routes: Routes = [
  {
    path: '',
    component: OffrirservicecartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffrirservicecartePageRoutingModule {}
