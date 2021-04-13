import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluscategoriePage } from './pluscategorie.page';

const routes: Routes = [
  {
    path: '',
    component: PluscategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluscategoriePageRoutingModule {}
