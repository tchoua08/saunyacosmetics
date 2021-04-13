import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreercomptePage } from './creercompte.page';

const routes: Routes = [
  {
    path: '',
    component: CreercomptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreercomptePageRoutingModule {}
