import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablivraisonPage } from './tablivraison.page';

const routes: Routes = [
  {
    path: '',
    component: TablivraisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablivraisonPageRoutingModule {}
