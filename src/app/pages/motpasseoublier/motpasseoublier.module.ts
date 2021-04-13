import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotpasseoublierPageRoutingModule } from './motpasseoublier-routing.module';

import { MotpasseoublierPage } from './motpasseoublier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotpasseoublierPageRoutingModule
  ],
  declarations: [MotpasseoublierPage]
})
export class MotpasseoublierPageModule {}
