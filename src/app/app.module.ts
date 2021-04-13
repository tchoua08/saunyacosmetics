import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import {ProduitState} from './produit.state';
import {PrestationState} from './prestation.state';
import {HttpClientModule} from '@angular/common/http';
import { AgenceState } from './agence.state';
import { GadieState } from './gadie.state';
import { BookingState } from './booking.state';
import { EventsService } from './events.service';
import { UserState } from './user.state';
import { SouhaitState } from './souhait.state';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgxsModule.forRoot([
      ProduitState,
      PrestationState,
      AgenceState,
      GadieState,
      BookingState,
      UserState,
      SouhaitState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule],
  providers: [AngularFirestoreModule,DatePicker,EventsService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
