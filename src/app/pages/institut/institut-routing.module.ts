import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutPage } from './institut.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutPageRoutingModule {}
