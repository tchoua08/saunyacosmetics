import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreercomptePageRoutingModule } from './creercompte-routing.module';

import { CreercomptePage } from './creercompte.page';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CreercomptePageRoutingModule
  ],
  declarations: [CreercomptePage]
})
export class CreercomptePageModule {}
