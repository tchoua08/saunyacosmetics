import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirservicecartePageRoutingModule } from './offrirservicecarte-routing.module';

import { OffrirservicecartePage } from './offrirservicecarte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirservicecartePageRoutingModule
  ],
  declarations: [OffrirservicecartePage]
})
export class OffrirservicecartePageModule {}
