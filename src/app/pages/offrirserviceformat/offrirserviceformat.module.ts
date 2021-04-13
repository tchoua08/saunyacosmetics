import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffrirserviceformatPageRoutingModule } from './offrirserviceformat-routing.module';

import { OffrirserviceformatPage } from './offrirserviceformat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffrirserviceformatPageRoutingModule
  ],
  declarations: [OffrirserviceformatPage]
})
export class OffrirserviceformatPageModule {}
