import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirservicedetailPageRoutingModule } from './offrirservicedetail-routing.module';

import { OffrirservicedetailPage } from './offrirservicedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirservicedetailPageRoutingModule
  ],
  declarations: [OffrirservicedetailPage]
})
export class OffrirservicedetailPageModule {}
