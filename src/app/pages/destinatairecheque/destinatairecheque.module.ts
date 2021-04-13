import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinatairechequePageRoutingModule } from './destinatairecheque-routing.module';

import { DestinatairechequePage } from './destinatairecheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinatairechequePageRoutingModule
  ],
  declarations: [DestinatairechequePage]
})
export class DestinatairechequePageModule {}
