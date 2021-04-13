import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueensemblePageRoutingModule } from './vueensemble-routing.module';

import { VueensemblePage } from './vueensemble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueensemblePageRoutingModule
  ],
  declarations: [VueensemblePage]
})
export class VueensemblePageModule {}
