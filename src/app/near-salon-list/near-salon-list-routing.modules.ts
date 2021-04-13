import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NearSalonListPage } from './near-salon-list.page';

const routes: Routes = [
  {
    path: '',
    component: NearSalonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NearSalonListPageRoutingModule {
}
