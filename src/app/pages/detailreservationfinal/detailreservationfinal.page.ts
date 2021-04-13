 import { Component, OnInit } from '@angular/core';
 import {AppService} from '../../../app/app.service';
 import { Router, ActivatedRoute } from '@angular/router';
 import * as _ from 'lodash';
 import {Prestation} from '../../../app/store/models/prestation.model';
 import {PrestationState} from '../../../app/prestation.state';
 import {Select, Store} from '@ngxs/store';
 import {Observable} from 'rxjs';
 import {DeletePrestation, GetPrestations, SetSelectedPrestation} from '../../../app/store/actions/prestation.action';
  // Booking
 import {BookingState} from '../../../app/Booking.state';
 import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../../app/store/actions/booking.action';
 import {DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { Booking } from 'src/app/store/models/booking.model';
import { EventsService } from '../../events.service';
import { BookingPage } from 'src/app/boohoo/booking/booking.page';
import { ActionSheetController, ModalController } from '@ionic/angular';

 @Component({
    selector: 'app-detailreservationfinal',
    templateUrl: './detailreservationfinal.page.html',
    styleUrls: ['./detailreservationfinal.page.scss'],
  })
  export class DetailreservationfinalPage implements OnInit {
    prestationsList:any;
    id = 0;
    categorie = '';
    somme = 0;
    imageUrl = 'https://dev.saunya.com/public/';

  //  @Select(PrestationState.getPrestationList) prestations!: Observable<Prestation[]>;


    constructor(
      public events: EventsService,
      public sanitizer: DomSanitizer,
      private app: AppService,
      public modalCtrl: ModalController,
      private store: Store,
      private route: ActivatedRoute,
      private router: Router
      ) {
        this.prestationsList = this.events.getNavReservation();



     // this.id = this.route.snapshot.params.id;


     }

    ngOnInit() {
    //  this.store.dispatch(new GetPrestations());
    //  this.prestationService();

     }

     /* async prestationService(){

      await this.prestations.subscribe(res => {
        this.prestationsList = _.filter(
        res['data'], (o) => {
          return o.id == this.id;
        });


      });

    }*/





    addBooking(){
      const book: Booking = {
         prestation : this.prestationsList,
         type : this.prestationsList.is_service,
         id: this.prestationsList.id
      };
      this.store.dispatch(new AddBooking(book));
    }


    async openNearModal(service:any) {

      const modal = await this.modalCtrl.create({
        component: BookingPage,
        cssClass: "nearSalon-modal",
        componentProps: {
          'leservice':   this.prestationsList
        }
      });
      return await modal.present();
    }

  }
