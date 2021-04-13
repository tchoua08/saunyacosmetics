import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChequecadeaucartePageRoutingModule } from './chequecadeaucarte-routing.module';

import { ChequecadeaucartePage } from './chequecadeaucarte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChequecadeaucartePageRoutingModule
  ],
  declarations: [ChequecadeaucartePage]
})
export class ChequecadeaucartePageModule {}
