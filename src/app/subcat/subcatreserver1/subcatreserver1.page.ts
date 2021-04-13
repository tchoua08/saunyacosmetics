import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {Categorie} from '../../store/models/categorie.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';



import {Prestation} from '../../../app/store/models/prestation.model';
import {PrestationState} from '../../../app/prestation.state';
import {Select, Store} from '@ngxs/store';
import {DeletePrestation, GetPrestations, SetSelectedPrestation} from '../../../app/store/actions/prestation.action';
import { EventsService } from '../../events.service';

import { TabAttributePage } from '../tab-attribute/tab-attribute.page';
import { PopoverComponent } from '../popover/popover.component';


  // Booking
  import {BookingState} from '../../../app/Booking.state';
  import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../../app/store/actions/booking.action';
  import {DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
 import { Booking } from 'src/app/store/models/booking.model';
 import { NearSalonListPage } from "../../near-salon-list/near-salon-list.page";
import { BookingPage } from 'src/app/boohoo/booking/booking.page';


@Component({
  selector: 'app-subcatreserver1',
  templateUrl: './subcatreserver1.page.html',
  styleUrls: ['./subcatreserver1.page.scss'],
})
export class Subcatreserver1Page implements OnInit {

  reservations = [];
  reservationsList = [];
  reservationsListBy = [];
  toggled = false;
  start = 'non';
  categories = [];
  imageUrl = 'https://dev.saunya.com/public/';
  checktype = 'cours';
  fullCheckinList: any = null;
  id = '';
  public viewType = '1';
  public voirPanier = 'non';
  public prix:number =0;
  public nomproduit:string='';
  public leservice:any;
  public book: Booking;

  panier :Booking;
  quantity:number =1 ;
  modelData: any;

  constructor(
    public events: EventsService,
    public modalCtrl: ModalController,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public popoverController: PopoverController,
    private router: Router,
    private store: Store,
    private app: AppService
     ) {

    this.id = this.route.snapshot.params.id;
   }

  ngOnInit() {

    this.categorieService();
   }



  async categorieService(){
  this.start = 'oui';
  await this.app.fetchCategoriesByUrl(this.id).subscribe(res => {
    this.start = 'non';
    this.categories = _.filter(
      res['data'], (o) => {
        return o.is_service === 1;
      });

    this.fullCheckinList = this.categories;

    });

  await this.app.fetchPrestationsByUrl(this.id).subscribe(res => {
      this.start = 'non';
      this.reservationsList = res['data'];
      this.reservationsListBy = this.reservationsList;
      });

  }

  goPrestation(uneReservation: any){
    const reservation: Prestation = {
      id: uneReservation.id,
      name: uneReservation.name,
      is_service: uneReservation.is_service,
      thumbnail_image: uneReservation.thumbnail_image,
      base_price: uneReservation.base_price,
      unit_price: uneReservation.unit_price,
      rating: uneReservation.rating,
      sales: uneReservation.sales,
      links: {
          details: uneReservation.links.details,
      },
      description: uneReservation.description
   };

    this.events.setNavReservation(reservation);
    this.voirPanier = 'non';
    this.router.navigate(['/tabs/reservation/detailreservationfinal/' + 1]);
  }






  toggleSearchbar() {
    this.toggled = true;
  }

  toggleCancel(){
    this.toggled = false;
  }

  onInput(ev: any){
    const val = ev.target.value;

    if (val && val.trim() !== '' && this.categories != null) {

      this.categories = this.categories.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));

      });
    }
    if (val === '' && this.categories != null){ this.categories = this.fullCheckinList; }

  }


  onCancel(ev: any){
    this.toggled = false;
  }

  goCategorie(categorie: any){

    this.voirPanier = 'non';

     this.router.navigate(['/tabs/reservation/subcatreserver1/' + categorie.id]);

  }



  // swith to grid view
  viewGrid(type: string) {
    this.viewType = type;
  }

       // show filter modal
       async openAttribute(tabName) {
        // show modal
        const modal = await this.modalCtrl.create({
          component: TabAttributePage
        });

        this.reservationsList = this.reservationsListBy ;
        modal.onDidDismiss().then((modelData) => {

          if (modelData !== null) {
            this.modelData = modelData.data;
            let res =   this.modelData.split("-");
            let val0 =parseInt(res[0],10);
            let val1 =parseInt(res[1],10);
            if (val0===val1){
              this.reservationsList = this.reservationsListBy ;
            }else{

              this.reservationsList = _.filter( this.reservationsList, result =>
                result.unit_price<=val1 && result.unit_price>=val0)

            }


          }
        });

        await modal.present();
      }



  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    popover.onDidDismiss().then((modelData) => {

      if (modelData !== null) {
        this.modelData = modelData.data;

        if (this.modelData==='decroissant'){

          this.reservationsList = _.sortBy( this.reservationsList, result =>result.unit_price)

        }else{

          this.reservationsList = _.sortBy( this.reservationsList, result =>result.unit_price)

        }


      }
    });
    return await popover.present();
  }

    // choose sort by
     addPanier() {

      const reservation: Prestation = {
        id: this.leservice.id,
        name: this.leservice.name,
        is_service: this.leservice.is_service,
        thumbnail_image: this.leservice.thumbnail_image,
        base_price: this.leservice.base_price,
        unit_price: this.leservice.unit_price,
        rating: this.leservice.rating,
        sales: this.leservice.sales,
        links: {
            details: this.leservice.links.details,
        },
        description: this.leservice.description
     };
     this.book= {
      prestation : reservation,
      type : reservation.is_service,
      id: reservation.id
      };
      this.voirPanier = 'non';
      this.quantity =1;
    this.store.dispatch(new AddBooking(this.book));



    }

     showPanier(service:any){
     this.voirPanier = 'oui';
     this.prix =service.unit_price;
     this.nomproduit=service.name;
     this.leservice =service;

    }

    fermer(){
      this.voirPanier = 'non';
    }

    async decreaseCartItem() {
      if(this.quantity>1)
       this.quantity =this.quantity-1;

    }

    async increaseCartItem() {

      this.quantity =this.quantity+1;
      }

      async openNearModal(service:any) {
        this.voirPanier = 'oui';
        this.prix =service.unit_price;
        this.nomproduit=service.name;
        this.leservice =service;

        const modal = await this.modalCtrl.create({
          component: BookingPage,
          cssClass: "nearSalon-modal",
          componentProps: {
            'leservice':  this.leservice
          }
        });
        return await modal.present();
      }



}
