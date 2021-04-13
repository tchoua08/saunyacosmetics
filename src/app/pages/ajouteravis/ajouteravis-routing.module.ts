import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouteravisPage } from './ajouteravis.page';

const routes: Routes = [
  {
    path: '',
    component: AjouteravisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteravisPageRoutingModule {}
