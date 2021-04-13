import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirPageRoutingModule } from './offrir-routing.module';

import { OffrirPage } from './offrir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirPageRoutingModule
  ],
  declarations: [OffrirPage]
})
export class OffrirPageModule {}
