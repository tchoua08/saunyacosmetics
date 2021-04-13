import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailreservationPage } from './detailreservation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailreservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailreservationPageRoutingModule {}
