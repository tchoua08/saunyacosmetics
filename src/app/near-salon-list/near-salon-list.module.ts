import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule } from '@ionic/angular';
import { NearSalonListPageRoutingModule } from './near-salon-list-routing.modules';

import { NearSalonListPage } from './near-salon-list.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NearSalonListPageRoutingModule
  ],
  declarations: [NearSalonListPage]

})
export class NearSalonListPageModule {}
