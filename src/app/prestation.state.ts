import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Prestation} from '../app/store/models/prestation.model';
import {AddPrestation, DeletePrestation, GetPrestations, SetSelectedPrestation, UpdatePrestation} from '../app/store/actions/prestation.action';
import {AppService} from '../app/app.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

export class PrestationStateModel {
    prestations: Prestation[];
    selectedPrestation: Prestation;
}

@State<PrestationStateModel>({
    name: 'prestation',
    defaults: {
        prestations: [],
        selectedPrestation: null
    }
})
@Injectable({
  providedIn: 'root'
})
export class PrestationState {

    constructor(private prestationService: AppService) {
    }

    @Selector()
    static getPrestationList(state: PrestationStateModel) {
        return state.prestations;
    }

    @Selector()
    static getSelectedPrestation(state: PrestationStateModel) {
        return state.selectedPrestation;
    }

    @Action(GetPrestations)
    getPrestations({getState, setState}: StateContext<PrestationStateModel>) {
        return this.prestationService.fetchPrestations().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                prestations: result,
            });
        }));
    }

    @Action(AddPrestation)
    addPrestation({getState, patchState}: StateContext<PrestationStateModel>, {payload}: AddPrestation) {
        return this.prestationService.addPrestation(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
              prestations: [...state.prestations, result]
            });
        }));
    }

    @Action(UpdatePrestation)
    updatePrestation({getState, setState}: StateContext<PrestationStateModel>, {payload, id}: UpdatePrestation) {
        return this.prestationService.updatePrestation(payload, id).pipe(tap((result) => {
            const state = getState();
            const prestationList = [...state.prestations];
            const prestationIndex = prestationList.findIndex(item => item.id === id);
            prestationList[prestationIndex] = result;
            setState({
                ...state,
                prestations: prestationList,
            });
        }));
    }


    @Action(DeletePrestation)
    deletePrestation({getState, setState}: StateContext<PrestationStateModel>, {id}: DeletePrestation) {
        return this.prestationService.deletePrestation(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.prestations.filter(item => item.id !== id);
            setState({
                ...state,
                prestations: filteredArray,
            });
        }));
    }

    @Action(SetSelectedPrestation)
    setSelectedPrestationId({getState, setState}: StateContext<PrestationStateModel>, {payload}: SetSelectedPrestation) {
        const state = getState();
        setState({
            ...state,
            selectedPrestation: payload
        });
    }
}
