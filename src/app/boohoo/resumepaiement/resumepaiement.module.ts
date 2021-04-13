import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumepaiementPageRoutingModule } from './resumepaiement-routing.module';

import { ResumepaiementPage } from './resumepaiement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumepaiementPageRoutingModule
  ],
  declarations: [ResumepaiementPage]
})
export class ResumepaiementPageModule {}
