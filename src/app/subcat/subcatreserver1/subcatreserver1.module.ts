import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subcatreserver1PageRoutingModule } from './subcatreserver1-routing.module';

import { Subcatreserver1Page } from './subcatreserver1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subcatreserver1PageRoutingModule
  ],
  declarations: [Subcatreserver1Page]
})
export class Subcatreserver1PageModule {}
