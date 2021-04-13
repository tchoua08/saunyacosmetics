import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffrirservicechequecadeauPage } from './offrirservicechequecadeau.page';

const routes: Routes = [
  {
    path: '',
    component: OffrirservicechequecadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffrirservicechequecadeauPageRoutingModule {}
