import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierMotPassePage } from './modifier-mot-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierMotPassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierMotPassePageRoutingModule {}
