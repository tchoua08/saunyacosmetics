import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddresselivraisonPageRoutingModule } from './addresselivraison-routing.module';

import { AddresselivraisonPage } from './addresselivraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddresselivraisonPageRoutingModule
  ],
  declarations: [AddresselivraisonPage]
})
export class AddresselivraisonPageModule {}
