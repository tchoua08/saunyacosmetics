import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailreservationPageRoutingModule } from './detailreservation-routing.module';

import { DetailreservationPage } from './detailreservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailreservationPageRoutingModule
  ],
  declarations: [DetailreservationPage]
})
export class DetailreservationPageModule {}
