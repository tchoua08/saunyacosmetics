import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Booking} from '../app/store/models/booking.model';
import {AddBooking, DeleteBooking, GetBookings, SetSelectedBooking, UpdateBooking} from '../app/store/actions/booking.action';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class BookingStateModel {
    bookings: Booking[];
    selectedBooking: Booking;
}

@State<BookingStateModel>({
    name: 'Booking',
    defaults: {
        bookings: [],
        selectedBooking: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class BookingState {

    constructor() {
    }

    @Selector()
    static getBookingList(state: BookingStateModel) {
        return state.bookings;
    }

    @Selector()
    static getSelectedBooking(state: BookingStateModel) {
        return state.selectedBooking;
    }

    @Action(GetBookings)
    getBookings({getState, setState}: StateContext<BookingStateModel>) {
      const state = getState();
      setState({ ...state});
    }

    @Action(AddBooking)
    addBooking({getState, patchState}: StateContext<BookingStateModel>, {payload}: AddBooking) {
      const state = getState();
      patchState({
        bookings: [...state.bookings, payload]
      });
    }

    @Action(UpdateBooking)
    updateBooking({getState, setState}: StateContext<BookingStateModel>, {payload, id}: UpdateBooking) {
      const state = getState();
      const bookingList = [...state.bookings];
      const bookingIndex = bookingList.findIndex(item => item.id === id);
      bookingList[bookingIndex] = payload;
      setState({
          ...state,
          bookings: bookingList,
      });
    }


    @Action(DeleteBooking)
    deleteBooking({getState, setState}: StateContext<BookingStateModel>, {id}: DeleteBooking) {
      const state = getState();
      const filteredArray = state.bookings.filter(item => item.id !== id);
      setState({
          ...state,
          bookings: filteredArray,
      });
    }

    @Action(SetSelectedBooking)
    setSelectedBookingId({getState, setState}: StateContext<BookingStateModel>, {payload}: SetSelectedBooking) {
        const state = getState();
        setState({
            ...state,
            selectedBooking: payload
        });
    }
}
