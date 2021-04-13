import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirmonprofilPageRoutingModule } from './voirmonprofil-routing.module';

import { VoirmonprofilPage } from './voirmonprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirmonprofilPageRoutingModule
  ],
  declarations: [VoirmonprofilPage]
})
export class VoirmonprofilPageModule {}
