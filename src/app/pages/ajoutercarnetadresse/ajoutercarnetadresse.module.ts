import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutercarnetadressePageRoutingModule } from './ajoutercarnetadresse-routing.module';

import { AjoutercarnetadressePage } from './ajoutercarnetadresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutercarnetadressePageRoutingModule
  ],
  declarations: [AjoutercarnetadressePage]
})
export class AjoutercarnetadressePageModule {}
