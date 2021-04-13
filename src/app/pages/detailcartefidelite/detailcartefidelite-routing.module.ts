import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailcartefidelitePage } from './detailcartefidelite.page';

const routes: Routes = [
  {
    path: '',
    component: DetailcartefidelitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailcartefidelitePageRoutingModule {}
