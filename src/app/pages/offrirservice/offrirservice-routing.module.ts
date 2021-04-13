import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffrirservicePage } from './offrirservice.page';

const routes: Routes = [
  {
    path: '',
    component: OffrirservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffrirservicePageRoutingModule {}
