import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Gadie} from '../app/store/models/gadie.model';
import {AddGadie, DeleteGadie, GetGadies, SetSelectedGadie, UpdateGadie} from '../app/store/actions/gadie.action';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class GadieStateModel {
    gadies: Gadie[];
    selectedGadie: Gadie;
}

@State<GadieStateModel>({
    name: 'Gadie',
    defaults: {
        gadies: [],
        selectedGadie: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class GadieState {

    constructor() {
    }

    @Selector()
    static getGadieList(state: GadieStateModel) {
        return state.gadies;
    }

    @Selector()
    static getSelectedGadie(state: GadieStateModel) {
        return state.selectedGadie;
    }

    @Action(GetGadies)
    getGadies({getState, setState}: StateContext<GadieStateModel>) {
      const state = getState();
      setState({ ...state});
    }

    @Action(AddGadie)
    addGadie({getState, patchState}: StateContext<GadieStateModel>, {payload}: AddGadie) {
      const state = getState();
      patchState({
        gadies: [...state.gadies, payload]
      });

    }

    @Action(UpdateGadie)
    updateGadie({getState, setState}: StateContext<GadieStateModel>, {payload, id}: UpdateGadie) {
      const state = getState();
      const gadieList = [...state.gadies];
      const gadieIndex = gadieList.findIndex(item => item.id === id);
      gadieList[gadieIndex] = payload;
      setState({
          ...state,
          gadies: gadieList,
      });
    }


    @Action(DeleteGadie)
    deleteGadie({getState, setState}: StateContext<GadieStateModel>, {id}: DeleteGadie) {
      const state = getState();
      const filteredArray = state.gadies.filter(item => item.id !== id);
      setState({
          ...state,
          gadies: filteredArray,
      });
    }

    @Action(SetSelectedGadie)
    setSelectedGadieId({getState, setState}: StateContext<GadieStateModel>, {payload}: SetSelectedGadie) {
        const state = getState();
        setState({
            ...state,
            selectedGadie: payload
        });
    }
}
