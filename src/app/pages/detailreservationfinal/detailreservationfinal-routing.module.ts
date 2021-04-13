import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailreservationfinalPage } from './detailreservationfinal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailreservationfinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailreservationfinalPageRoutingModule {}
