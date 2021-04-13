import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueachatsPage } from './historiqueachats.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueachatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueachatsPageRoutingModule {}
