import {State, Action, StateContext, Selector} from '@ngxs/store';
import {UserBooking} from '../app/store/models/user.booking.model';
import {AddUserBooking, DeleteUserBooking, GetUserBookings, SetSelectedUserBooking, UpdateUserBooking} from '../app/store/actions/user.booking.action';
import {AppService} from '../app/app.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export class UserBookingStateModel {
    userbookings: UserBooking[];
    selectedUserBooking: UserBooking;
}

@State<UserBookingStateModel>({
    name: 'userbooking',
    defaults: {
        userbookings: [],
        selectedUserBooking: null
    }
})

@Injectable({
  providedIn: 'root'
})
export class UserBookingState {

    constructor(private userbookingService: AppService) {
    }

    @Selector()
    static getUserBookingList(state: UserBookingStateModel) {
        return state.userbookings;
    }

    @Selector()
    static getSelectedUserBooking(state: UserBookingStateModel) {
        return state.selectedUserBooking;
    }

    @Action(GetUserBookings)
    getUserBookings({getState, setState}: StateContext<UserBookingStateModel>) {
      const state = getState();
      setState({...state});
    }

    @Action(AddUserBooking)
    addUserBooking({getState, patchState}: StateContext<UserBookingStateModel>, {payload}: AddUserBooking) {
      const state = getState();
      patchState({
          userbookings: [...state.userbookings, payload]
      });
    }

    @Action(UpdateUserBooking)
    updateUserBooking({getState, setState}: StateContext<UserBookingStateModel>, {payload, id}: UpdateUserBooking) {
      const state = getState();
      const userbookingList = [...state.userbookings];
      const userbookingIndex = userbookingList.findIndex(item => item.id === id);
      userbookingList[userbookingIndex] = payload;
      setState({
                ...state,
               userbookings: userbookingList,
            });
    }


    @Action(DeleteUserBooking)
    deleteUserBooking({getState, setState}: StateContext<UserBookingStateModel>, {id}: DeleteUserBooking) {
      const state = getState();
      const filteredArray = state.userbookings.filter(item => item.id !== id);
      setState({
          ...state,
          userbookings: filteredArray,
      });
    }

    @Action(SetSelectedUserBooking)
    setSelectedUserBookingId({getState, setState}: StateContext<UserBookingStateModel>, {payload}: SetSelectedUserBooking) {
        const state = getState();
        setState({
            ...state,
            selectedUserBooking: payload
        });
    }
}
