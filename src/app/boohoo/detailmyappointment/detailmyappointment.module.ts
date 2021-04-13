import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmyappointmentPageRoutingModule } from './detailmyappointment-routing.module';

import { DetailmyappointmentPage } from './detailmyappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmyappointmentPageRoutingModule
  ],
  declarations: [DetailmyappointmentPage]
})
export class DetailmyappointmentPageModule {}
