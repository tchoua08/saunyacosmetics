import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirservicechequecadeauPageRoutingModule } from './offrirservicechequecadeau-routing.module';

import { OffrirservicechequecadeauPage } from './offrirservicechequecadeau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirservicechequecadeauPageRoutingModule
  ],
  declarations: [OffrirservicechequecadeauPage]
})
export class OffrirservicechequecadeauPageModule {}
