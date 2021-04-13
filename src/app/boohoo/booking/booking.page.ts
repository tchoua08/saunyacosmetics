import { Component, OnInit,Input} from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';
import { HeurePage } from '../heure/heure.page';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';


import {BookingState} from '../../../app/Booking.state';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../../app/store/actions/booking.action';
import {DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { Booking } from 'src/app/store/models/booking.model';

import {Prestation} from '../../../app/store/models/prestation.model';
import {PrestationState} from '../../../app/prestation.state';
import {Select, Store} from '@ngxs/store';
import {DeletePrestation, GetPrestations, SetSelectedPrestation} from '../../../app/store/actions/prestation.action';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

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

  @Input() leservice: any;
  public book: Booking;

  panier :Booking;
  quantity:number =1 ;
  modelData: any;
  bookDate: any;
  employeeList: any = [
    {
      index: 1,
      image: "../../../assets/image/siege1.png",
      name: "Place 1"
    },
    {
      index: 2,
      image: "../../../assets/image/siege2.png",
      name: "Place 2"
    }
  ];
  timeSlot: any = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM"
  ];
  selectedEmployee: any = 2;
  activeTimeSlot: any = "12:00 PM";
  minYear: any = new Date().getFullYear();
  maxYear: any = new Date().getFullYear() + 5;

  constructor(  private store: Store,private router: Router,private datePicker: DatePicker,public modalCtrl: ModalController,private navCtrl: NavController) {
    this.bookDate = new Date();
  }


  ngOnInit() {}

  btnOpenPaiement(){
    this.router.navigate(['/tabs/panier/paiement'])
  }
  backPage() {
    this.navCtrl.back();
  }
  setEmployee(emp) {
    this.selectedEmployee = emp.index;
  }
  setTimeSlot(time) {
    this.activeTimeSlot = time;
  }
  continue() {
    this.navCtrl.navigateForward("/booking-detail");
  }


      // choose sort by
      addPanier() {
        this.modalCtrl.dismiss();
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
}
