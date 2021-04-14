import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapservicePageRoutingModule } from './recapservice-routing.module';

import { RecapservicePage } from './recapservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapservicePageRoutingModule
  ],
  declarations: [RecapservicePage]
})
export class RecapservicePageModule {}
