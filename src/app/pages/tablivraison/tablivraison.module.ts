import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablivraisonPageRoutingModule } from './tablivraison-routing.module';

import { TablivraisonPage } from './tablivraison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablivraisonPageRoutingModule
  ],
  declarations: [TablivraisonPage]
})
export class TablivraisonPageModule {}
