import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestationsPageRoutingModule } from './prestations-routing.module';

import { PrestationsPage } from './prestations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestationsPageRoutingModule
  ],
  declarations: [PrestationsPage]
})
export class PrestationsPageModule {}
