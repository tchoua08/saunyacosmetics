import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesavisPage } from './mesavis.page';

const routes: Routes = [
  {
    path: '',
    component: MesavisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesavisPageRoutingModule {}
