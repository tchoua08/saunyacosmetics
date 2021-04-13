import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifiercarnetadressePageRoutingModule } from './modifiercarnetadresse-routing.module';

import { ModifiercarnetadressePage } from './modifiercarnetadresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifiercarnetadressePageRoutingModule
  ],
  declarations: [ModifiercarnetadressePage]
})
export class ModifiercarnetadressePageModule {}
