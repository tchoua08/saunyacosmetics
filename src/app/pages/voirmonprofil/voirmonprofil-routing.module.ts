import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirmonprofilPage } from './voirmonprofil.page';

const routes: Routes = [
  {
    path: '',
    component: VoirmonprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirmonprofilPageRoutingModule {}
