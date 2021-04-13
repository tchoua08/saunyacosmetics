import { Component, OnInit } from '@angular/core';
import {Gadie} from '../../app/store/models/gadie.model';
import {GadieState} from '../../app/gadie.state';
import {AddGadie, DeleteGadie, GetGadies, SetSelectedGadie} from '../../app/store/actions/gadie.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

import * as _ from 'lodash';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';

import {Booking} from '../../app/store/models/booking.model';
import {BookingState} from '../../app/booking.state';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../app/store/actions/booking.action';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.page.html',
  styleUrls: ['./tab-bar.page.scss'],
})
export class TabBarPage implements OnInit {
  @Select(GadieState.getGadieList) gadies!: Observable<Gadie[]>;

  @Select(BookingState.getBookingList) bookings!: Observable<Booking[]>;

  taille:number=0;
   tailleus:number=0;

  constructor(public sanitizer:DomSanitizer,private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetGadies());

    this.gadies.subscribe(res => {
      const items = res;
       this.taille =items.length;

    });


    this.store.dispatch(new GetBookings());

    this.bookings.subscribe(res => {
      const itemsub = res;
       this.tailleus =itemsub.length;

    });


     }

}
