import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyappointmentPage } from './myappointment.page';

const routes: Routes = [
  {
    path: '',
    component: MyappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyappointmentPageRoutingModule {}
