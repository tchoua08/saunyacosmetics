import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailcuresfinPage } from './detailcuresfin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailcuresfinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailcuresfinPageRoutingModule {}
