import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChequecadeauPage } from './chequecadeau.page';

const routes: Routes = [
  {
    path: '',
    component: ChequecadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChequecadeauPageRoutingModule {}
