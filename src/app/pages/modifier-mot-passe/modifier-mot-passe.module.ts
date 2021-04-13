import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModifierMotPassePageRoutingModule } from './modifier-mot-passe-routing.module';

import { ModifierMotPassePage } from './modifier-mot-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModifierMotPassePageRoutingModule
  ],
  declarations: [ModifierMotPassePage]
})
export class ModifierMotPassePageModule {}
