import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Souhait} from '../app/store/models/Souhait.model';
import {AddSouhait, DeleteSouhait, GetSouhaits, SetSelectedSouhait, UpdateSouhait} from '../app/store/actions/souhait.action';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class SouhaitStateModel {
    souhaits: Souhait[];
    selectedSouhait: Souhait;
}

@State<SouhaitStateModel>({
    name: 'Souhait',
    defaults: {
        souhaits: [],
        selectedSouhait: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class SouhaitState {

    constructor() {
    }

    @Selector()
    static getSouhaitList(state: SouhaitStateModel) {
        return state.souhaits;
    }

    @Selector()
    static getSelectedSouhait(state: SouhaitStateModel) {
        return state.selectedSouhait;
    }

    @Action(GetSouhaits)
    getSouhaits({getState, setState}: StateContext<SouhaitStateModel>) {
      const state = getState();
      setState({ ...state});
    }

    @Action(AddSouhait)
    addSouhait({getState, patchState}: StateContext<SouhaitStateModel>, {payload}: AddSouhait) {
      const state = getState();
      patchState({
        souhaits: [...state.souhaits, payload]
      });

    }

    @Action(UpdateSouhait)
    updateSouhait({getState, setState}: StateContext<SouhaitStateModel>, {payload, id}: UpdateSouhait) {
      const state = getState();
      const souhaitList = [...state.souhaits];
      const souhaitIndex = souhaitList.findIndex(item => item.id === id);
      souhaitList[souhaitIndex] = payload;
      setState({
          ...state,
         souhaits:souhaitList,
      });
    }


    @Action(DeleteSouhait)
    deleteSouhait({getState, setState}: StateContext<SouhaitStateModel>, {id}: DeleteSouhait) {
      const state = getState();
      const filteredArray = state.souhaits.filter(item => item.id !== id);
      setState({
          ...state,
          souhaits: filteredArray,
      });
    }

    @Action(SetSelectedSouhait)
    setSelectedSouhaitId({getState, setState}: StateContext<SouhaitStateModel>, {payload}: SetSelectedSouhait) {
        const state = getState();
        setState({
            ...state,
            selectedSouhait: payload
        });
    }
}
