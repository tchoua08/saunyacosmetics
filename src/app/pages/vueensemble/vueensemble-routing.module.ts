import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueensemblePage } from './vueensemble.page';

const routes: Routes = [
  {
    path: '',
    component: VueensemblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueensemblePageRoutingModule {}
