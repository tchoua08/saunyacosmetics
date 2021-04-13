import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailreservationfinalPageRoutingModule } from './detailreservationfinal-routing.module';

import { DetailreservationfinalPage } from './detailreservationfinal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailreservationfinalPageRoutingModule
  ],
  declarations: [DetailreservationfinalPage]
})
export class DetailreservationfinalPageModule {}
