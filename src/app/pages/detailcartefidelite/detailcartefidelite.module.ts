import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailcartefidelitePageRoutingModule } from './detailcartefidelite-routing.module';

import { DetailcartefidelitePage } from './detailcartefidelite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailcartefidelitePageRoutingModule
  ],
  declarations: [DetailcartefidelitePage]
})
export class DetailcartefidelitePageModule {}
