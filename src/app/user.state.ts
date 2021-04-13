import {State, Action, StateContext, Selector} from '@ngxs/store';
import {User} from '../app/store/models/user.model';
import {AddUser, DeleteUser, GetUsers, SetSelectedUser, UpdateUser} from '../app/store/actions/user.action';
import {AppService} from '../app/app.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export class UserStateModel {
    users: User[];
    selectedUser: User;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        users: [],
        selectedUser: null
    }
})

@Injectable({
  providedIn: 'root'
})
export class UserState {

    constructor(private userService: AppService) {
    }

    @Selector()
    static getUserList(state: UserStateModel) {
        return state.users;
    }

    @Selector()
    static getSelectedUser(state: UserStateModel) {
        return state.selectedUser;
    }

    @Action(GetUsers)
    getUsers({getState, setState}: StateContext<UserStateModel>) {
      const state = getState();
      setState({...state});
    }

    @Action(AddUser)
    addUser({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser) {
      const state = getState();
      patchState({
          users: [...state.users, payload]
      });
    }

    @Action(UpdateUser)
    updateUser({getState, setState}: StateContext<UserStateModel>, {payload, id}: UpdateUser) {
      const state = getState();
      const userList = [...state.users];
            const userIndex = userList.findIndex(item => item.id === id);
            userList[userIndex] = payload;
            setState({
                ...state,
               users:userList,
            });
    }




    @Action(DeleteUser)
    deleteUser({getState, setState}: StateContext<UserStateModel>) {
      {
        const state = getState();
        state.users=null;
        setState({...state});
      }
    }

    @Action(SetSelectedUser)
    setSelectedUserId({getState, setState}: StateContext<UserStateModel>, {payload}: SetSelectedUser) {
        const state = getState();
        setState({
            ...state,
            selectedUser: payload
        });
    }
}
