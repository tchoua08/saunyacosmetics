import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subcatproduit1PageRoutingModule } from './subcatproduit1-routing.module';

import { Subcatproduit1Page } from './subcatproduit1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subcatproduit1PageRoutingModule
  ],
  declarations: [Subcatproduit1Page]
})
export class Subcatproduit1PageModule {}
