import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnetadressePageRoutingModule } from './carnetadresse-routing.module';

import { CarnetadressePage } from './carnetadresse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnetadressePageRoutingModule
  ],
  declarations: [CarnetadressePage]
})
export class CarnetadressePageModule {}
