import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app/app.service';
import * as _ from 'lodash';

import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
// Booking
import {Booking} from '../../../app/store/models/booking.model';
import {BookingState} from '../../../app/booking.state';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking} from '../../../app/store/actions/booking.action';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


import {User} from '../../../app/store/models/user.model';
import {UserState} from '../../../app/user.state';
import {AddUser, DeleteUser, GetUsers, SetSelectedUser} from '../../../app/store/actions/user.action';


import {UserBooking} from '../../../app/store/models/user.booking.model';
import {UserBookingState} from '../../../app/user.booking.state';
import {AddUserBooking, DeleteUserBooking, GetUserBookings, SetSelectedUserBooking} from '../../../app/store/actions/user.booking.action';




@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.page.html',
  styleUrls: ['./prestations.page.scss'],
})
export class PrestationsPage implements OnInit {

  commandes = [];
  somme = 0;
  coiffeur:any;
  imageUrl="https://dev.saunya.com/public/";
  @Select(BookingState.getBookingList) bookings!: Observable<Booking[]>;

  @Select(UserState.getUserList) users!: Observable<User[]>;

  constructor(public sanitizer:DomSanitizer,private store: Store, private app: AppService) { }

   ngOnInit() {
    this.store.dispatch(new GetBookings());


    this.bookings.subscribe(res => {
      const items = res;
      this.somme = _.sumBy(items, function(item) {
        return item.prestation.unit_price;

      });

    });
     }

     async delBooking(id: number){
      this.store.dispatch(new DeleteBooking(id));
      await this.bookings.subscribe(res => {
        const items = res;
        this.somme = _.sumBy(items, function(item) {
          return item.prestation.unit_price;
      });

     });
    }

  async service(){
    // this.commandes = await this.app.getCommandes();

   }

   goHoraire(){

    const userbook: UserBooking = {
      id : 1,
      user : this.users,
      booking : this.bookings,
      professionnel: this.coiffeur,
      horaire : '',
      jour : ''

   };
   this.store.dispatch(new AddUserBooking(userbook));
   }


}
