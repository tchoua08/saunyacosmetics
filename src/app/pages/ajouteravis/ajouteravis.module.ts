import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouteravisPageRoutingModule } from './ajouteravis-routing.module';

import { AjouteravisPage } from './ajouteravis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouteravisPageRoutingModule
  ],
  declarations: [AjouteravisPage]
})
export class AjouteravisPageModule {}
