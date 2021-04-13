import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneverifyPageRoutingModule } from './phoneverify-routing.module';

import { PhoneverifyPage } from './phoneverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneverifyPageRoutingModule
  ],
  declarations: [PhoneverifyPage]
})
export class PhoneverifyPageModule {}
