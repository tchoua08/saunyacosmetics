import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChequecadeauPageRoutingModule } from './chequecadeau-routing.module';

import { ChequecadeauPage } from './chequecadeau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChequecadeauPageRoutingModule
  ],
  declarations: [ChequecadeauPage]
})
export class ChequecadeauPageModule {}
