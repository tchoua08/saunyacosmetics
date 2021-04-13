import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumepaiementPage } from './resumepaiement.page';

const routes: Routes = [
  {
    path: '',
    component: ResumepaiementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumepaiementPageRoutingModule {}
