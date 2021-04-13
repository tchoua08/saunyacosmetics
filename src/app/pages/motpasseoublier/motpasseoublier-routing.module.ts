import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotpasseoublierPage } from './motpasseoublier.page';

const routes: Routes = [
  {
    path: '',
    component: MotpasseoublierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotpasseoublierPageRoutingModule {}
