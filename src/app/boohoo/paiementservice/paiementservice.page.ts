import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
// gadie
import {Gadie} from '../../../app/store/models/gadie.model';
import {GadieState} from '../../../app/gadie.state';
import {UpdateGadie,AddGadie, DeleteGadie, GetGadies, SetSelectedGadie} from '../../../app/store/actions/gadie.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

import {Booking} from '../../../app/store/models/booking.model';
import {BookingState} from '../../../app/booking.state';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../../app/store/actions/booking.action';
import * as _ from 'lodash';
@Component({
  selector: 'app-paiementservice',
  templateUrl: './paiementservice.page.html',
  styleUrls: ['./paiementservice.page.scss'],
})
export class PaiementservicePage implements OnInit {
  activePage:number= 0;
  @Select(GadieState.getGadieList) gadies!: Observable<Gadie[]>;

  @Select(BookingState.getBookingList) bookings!: Observable<Booking[]>;
  prestationsList:any;
  commandes = [];
  somme = 0;
  sommeub =0;
  items:Gadie[]=[];
  itemsFilter=[];
  imageItems =[];
  quantity:number =1 ;
  idCommande:number=1;
  panier :Gadie;
  action ='ouvert';
  imageUrl="https://dev.saunya.com/public/";

  constructor( public sanitizer:DomSanitizer,private store: Store) { }



  ngOnInit() {
    this.store.dispatch(new GetGadies());

    this.store.dispatch(new GetBookings());
    this.imageItems=[];
    this.bookings.subscribe(res => {
      const itemsub = res;
      this.sommeub = _.sumBy(itemsub, function(item) {
        return item.prestation.unit_price;
    });

    itemsub.forEach(element=>{

      this.imageItems.push(
        {image:element.prestation.thumbnail_image,
        name:element.prestation.name.substring(0,10)})
    })
    });

    this.gadies.subscribe(res => {
      this.items = res;
      this.itemsFilter = _.uniqBy(this.items,'id');
      this.somme = _.sumBy(this.itemsFilter, function(item) {
        return item.prixTotal;

      });

      this.itemsFilter.forEach(element=>{

        this.imageItems.push(
          {image:element.produit.thumbnail_image,
          name:element.produit.name.substring(0,10)});
      })


    });
  }

  selectedSegment(index:number) {
    this.activePage = index;
  }

  Handler(event) {

    if (event.target.value === 'place'){

   }else{

   }
  }
  leave(event) {

  }

  go(event){}

  btnAction(el:string){
    this.action =el;
  }


}

