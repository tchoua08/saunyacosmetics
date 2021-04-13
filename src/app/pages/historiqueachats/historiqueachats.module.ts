import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueachatsPageRoutingModule } from './historiqueachats-routing.module';

import { HistoriqueachatsPage } from './historiqueachats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueachatsPageRoutingModule
  ],
  declarations: [HistoriqueachatsPage]
})
export class HistoriqueachatsPageModule {}
