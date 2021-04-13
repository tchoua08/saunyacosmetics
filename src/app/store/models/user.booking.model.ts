import {User} from './user.model';
import {Booking} from './booking.model';
import {Observable} from 'rxjs';

export interface UserBooking {
 id: number;
 user: Observable<User[]>;
 booking:Observable<Booking[]>;
 professionnel: string;
 horaire: string;
 jour: string;

}
