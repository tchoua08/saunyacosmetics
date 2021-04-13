import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subcatreserver1Page } from './subcatreserver1.page';

const routes: Routes = [
  {
    path: '',
    component: Subcatreserver1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subcatreserver1PageRoutingModule {}
