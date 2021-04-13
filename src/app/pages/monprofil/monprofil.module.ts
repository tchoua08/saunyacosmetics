import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonprofilPageRoutingModule } from './monprofil-routing.module';

import { MonprofilPage } from './monprofil.page';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MonprofilPageRoutingModule,
    NgxsResetPluginModule.forRoot()
  ],
  declarations: [MonprofilPage]
})
export class MonprofilPageModule {}
