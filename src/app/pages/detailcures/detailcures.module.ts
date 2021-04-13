import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailcuresPageRoutingModule } from './detailcures-routing.module';

import { DetailcuresPage } from './detailcures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailcuresPageRoutingModule
  ],
  declarations: [DetailcuresPage]
})
export class DetailcuresPageModule {}
