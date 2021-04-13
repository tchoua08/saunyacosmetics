import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Produit} from '../app/store/models/produit.model';
import {AddProduit, DeleteProduit, GetProduits, SetSelectedProduit, UpdateProduit} from '../app/store/actions/produit.action';
import {AppService} from '../app/app.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export class ProduitStateModel {
    produits: Produit[];
    selectedProduit: Produit;
}

@State<ProduitStateModel>({
    name: 'produit',
    defaults: {
        produits: [],
        selectedProduit: null
    }
})

@Injectable({
  providedIn: 'root'
})
export class ProduitState {

    constructor(private produitService: AppService) {
    }

    @Selector()
    static getProduitList(state: ProduitStateModel) {
        return state.produits;
    }

    @Selector()
    static getSelectedProduit(state: ProduitStateModel) {
        return state.selectedProduit;
    }

    @Action(GetProduits)
    getProduits({getState, setState}: StateContext<ProduitStateModel>) {
      const state = getState();
      setState({...state});
    }

    @Action(AddProduit)
    addProduit({getState, patchState}: StateContext<ProduitStateModel>, {payload}: AddProduit) {
      const state = getState();
     
      patchState({
          produits: [...state.produits,payload]
      });
    }

    @Action(UpdateProduit)
    updateProduit({getState, setState}: StateContext<ProduitStateModel>, {payload, id}: UpdateProduit) {
       
            const state = getState();
      const produitList = [...state.produits];
            const produitIndex = produitList.findIndex(item => item.id === id);
            produitList[produitIndex] = payload;
            setState({
                ...state,
                produits: produitList,
            });
      
    }


    @Action(DeleteProduit)
    deleteProduit({getState, setState}: StateContext<ProduitStateModel>, {id}: DeleteProduit) {
      const state = getState();
      const filteredArray = state.produits.filter(item => item.id !== id);
      setState({
          ...state,
          produits: filteredArray,
      });
    }

    @Action(SetSelectedProduit)
    setSelectedProduitId({getState, setState}: StateContext<ProduitStateModel>, {payload}: SetSelectedProduit) {
        const state = getState();
        setState({
            ...state,
            selectedProduit: payload
        });
    }
}
