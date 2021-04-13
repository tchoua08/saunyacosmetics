import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailproduitfinPage } from './detailproduitfin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailproduitfinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailproduitfinPageRoutingModule {}
