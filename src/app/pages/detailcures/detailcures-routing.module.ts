import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailcuresPage } from './detailcures.page';

const routes: Routes = [
  {
    path: '',
    component: DetailcuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailcuresPageRoutingModule {}
