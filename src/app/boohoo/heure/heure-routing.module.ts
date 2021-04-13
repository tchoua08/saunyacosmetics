import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeurePage } from './heure.page';

const routes: Routes = [
  {
    path: '',
    component: HeurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeurePageRoutingModule {}
