import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluscategoriePageRoutingModule } from './pluscategorie-routing.module';

import { PluscategoriePage } from './pluscategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluscategoriePageRoutingModule
  ],
  declarations: [PluscategoriePage]
})
export class PluscategoriePageModule {}
