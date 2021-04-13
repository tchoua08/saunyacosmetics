import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifiercarnetadressePage } from './modifiercarnetadresse.page';

const routes: Routes = [
  {
    path: '',
    component: ModifiercarnetadressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifiercarnetadressePageRoutingModule {}
