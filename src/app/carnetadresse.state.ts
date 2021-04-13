import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CarnetAdresse} from '../app/store/models/carnetAdresse.model';
import {AddCarnetAdresse, DeleteCarnetAdresse, GetCarnetAdresses, SetSelectedCarnetAdresse, UpdateCarnetAdresse} from '../app/store/actions/carnetAdresse.action';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class CarnetAdresseStateModel {
    carnetAdresses: CarnetAdresse[];
    selectedCarnetAdresse: CarnetAdresse;
}

@State<CarnetAdresseStateModel>({
    name: 'carnetAdresse',
    defaults: {
        carnetAdresses: [],
        selectedCarnetAdresse: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class CarnetAdresseState {

    constructor() {
    }

    @Selector()
    static getCarnetAdresseList(state: CarnetAdresseStateModel) {
        return state.carnetAdresses;
    }

    @Selector()
    static getSelectedCarnetAdresse(state: CarnetAdresseStateModel) {
        return state.selectedCarnetAdresse;
    }

    @Action(GetCarnetAdresses)
    getCarnetAdresses({getState, setState}: StateContext<CarnetAdresseStateModel>) {
      const state = getState();
      setState({ ...state});
    }

    @Action(AddCarnetAdresse)
    addCarnetAdresse({getState, patchState}: StateContext<CarnetAdresseStateModel>, {payload}: AddCarnetAdresse) {
      const state = getState();
      patchState({
        carnetAdresses: [...state.carnetAdresses, payload]
      });
    }

    @Action(UpdateCarnetAdresse)
    updateCarnetAdresse({getState, setState}: StateContext<CarnetAdresseStateModel>, {payload, id}: UpdateCarnetAdresse) {
      const state = getState();
      const carnetAdresseList = [...state.carnetAdresses];
      const carnetAdresseIndex = carnetAdresseList.findIndex(item => item.id === id);
      carnetAdresseList[carnetAdresseIndex] = payload;
      setState({
          ...state,
          carnetAdresses: carnetAdresseList,
      });
    }


    @Action(DeleteCarnetAdresse)
    deleteCarnetAdresse({getState, setState}: StateContext<CarnetAdresseStateModel>, {id}: DeleteCarnetAdresse) {
      const state = getState();
      const filteredArray = state.carnetAdresses.filter(item => item.id !== id);
      setState({
          ...state,
          carnetAdresses: filteredArray,
      });
    }

    @Action(SetSelectedCarnetAdresse)
    setSelectedCarnetAdresseId({getState, setState}: StateContext<CarnetAdresseStateModel>, {payload}: SetSelectedCarnetAdresse) {
        const state = getState();
        setState({
            ...state,
            selectedCarnetAdresse: payload
        });
    }
}
