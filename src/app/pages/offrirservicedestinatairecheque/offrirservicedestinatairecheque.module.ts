import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirservicedestinatairechequePageRoutingModule } from './offrirservicedestinatairecheque-routing.module';

import { OffrirservicedestinatairechequePage } from './offrirservicedestinatairecheque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirservicedestinatairechequePageRoutingModule
  ],
  declarations: [OffrirservicedestinatairechequePage]
})
export class OffrirservicedestinatairechequePageModule {}
