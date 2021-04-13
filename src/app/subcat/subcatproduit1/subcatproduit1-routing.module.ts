import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subcatproduit1Page } from './subcatproduit1.page';

const routes: Routes = [
  {
    path: '',
    component: Subcatproduit1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subcatproduit1PageRoutingModule {}
