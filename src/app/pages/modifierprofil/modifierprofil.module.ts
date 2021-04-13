import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierprofilPageRoutingModule } from './modifierprofil-routing.module';

import { ModifierprofilPage } from './modifierprofil.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierprofilPageRoutingModule
  ],
  declarations: [ModifierprofilPage]
})
export class ModifierprofilPageModule {}
