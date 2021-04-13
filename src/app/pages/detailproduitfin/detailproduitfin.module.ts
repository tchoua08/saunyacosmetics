import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailproduitfinPageRoutingModule } from './detailproduitfin-routing.module';

import { DetailproduitfinPage } from './detailproduitfin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailproduitfinPageRoutingModule
  ],
  declarations: [DetailproduitfinPage]
})
export class DetailproduitfinPageModule {}
