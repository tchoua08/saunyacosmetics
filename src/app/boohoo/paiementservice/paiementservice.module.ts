import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementservicePageRoutingModule } from './paiementservice-routing.module';

import { PaiementservicePage } from './paiementservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementservicePageRoutingModule
  ],
  declarations: [PaiementservicePage]
})
export class PaiementservicePageModule {}
