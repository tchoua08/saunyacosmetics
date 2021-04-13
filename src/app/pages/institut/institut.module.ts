import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutPageRoutingModule } from './institut-routing.module';

import { InstitutPage } from './institut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutPageRoutingModule
  ],
  declarations: [InstitutPage]
})
export class InstitutPageModule {}
