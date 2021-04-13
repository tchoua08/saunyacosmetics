import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAttributePage } from './tab-attribute.page';

const routes: Routes = [
  {
    path: '',
    component: TabAttributePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAttributePageRoutingModule {
}
