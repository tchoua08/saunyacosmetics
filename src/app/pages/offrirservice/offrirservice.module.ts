import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirservicePageRoutingModule } from './offrirservice-routing.module';

import { OffrirservicePage } from './offrirservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirservicePageRoutingModule
  ],
  declarations: [OffrirservicePage]
})
export class OffrirservicePageModule {}
