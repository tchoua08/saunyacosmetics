import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeurePageRoutingModule } from './heure-routing.module';

import { HeurePage } from './heure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeurePageRoutingModule
  ],
  declarations: [HeurePage]
})
export class HeurePageModule {}
