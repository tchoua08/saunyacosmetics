import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmyappointmentPage } from './detailmyappointment.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmyappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmyappointmentPageRoutingModule {}
