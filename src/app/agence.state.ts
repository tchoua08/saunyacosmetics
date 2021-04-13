import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Agence} from '../app/store/models/agence.model';
import {AddAgence, DeleteAgence, GetAgences, SetSelectedAgence, UpdateAgence} from '../app/store/actions/agence.action';
import {AppService} from '../app/app.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class AgenceStateModel {
    agences: Agence[];
    selectedAgence: Agence;
}

@State<AgenceStateModel>({
    name: 'Agence',
    defaults: {
        agences: [],
        selectedAgence: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class AgenceState {

    constructor(private agenceService: AppService) {
    }

    @Selector()
    static getAgenceList(state: AgenceStateModel) {
        return state.agences;
    }

    @Selector()
    static getSelectedAgence(state: AgenceStateModel) {
        return state.selectedAgence;
    }

    @Action(GetAgences)
    getAgences({getState, setState}: StateContext<AgenceStateModel>) {
        return this.agenceService.fetchAgences().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                agences: result,
            });
        }));
    }

    @Action(AddAgence)
    addAgence({getState, patchState}: StateContext<AgenceStateModel>, {payload}: AddAgence) {
        return this.agenceService.addAgence(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
              agences: [...state.agences, result]
            });
        }));
    }

    @Action(UpdateAgence)
    updateAgence({getState, setState}: StateContext<AgenceStateModel>, {payload, id}: UpdateAgence) {
        return this.agenceService.updateAgence(payload, id).pipe(tap((result) => {
            const state = getState();
            const agenceList = [...state.agences];
            const agenceIndex = agenceList.findIndex(item => item.id === id);
            agenceList[agenceIndex] = result;
            setState({
                ...state,
                agences: agenceList,
            });
        }));
    }


    @Action(DeleteAgence)
    deleteAgence({getState, setState}: StateContext<AgenceStateModel>, {id}: DeleteAgence) {
        return this.agenceService.deleteAgence(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.agences.filter(item => item.id !== id);
            setState({
                ...state,
                agences: filteredArray,
            });
        }));
    }

    @Action(SetSelectedAgence)
    setSelectedAgenceId({getState, setState}: StateContext<AgenceStateModel>, {payload}: SetSelectedAgence) {
        const state = getState();
        setState({
            ...state,
            selectedAgence: payload
        });
    }
}
