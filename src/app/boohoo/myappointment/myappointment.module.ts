import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyappointmentPageRoutingModule } from './myappointment-routing.module';

import { MyappointmentPage } from './myappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyappointmentPageRoutingModule
  ],
  declarations: [MyappointmentPage]
})
export class MyappointmentPageModule {}
