import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesavisPageRoutingModule } from './mesavis-routing.module';

import { MesavisPage } from './mesavis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesavisPageRoutingModule
  ],
  declarations: [MesavisPage]
})
export class MesavisPageModule {}
