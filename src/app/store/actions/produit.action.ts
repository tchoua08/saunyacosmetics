import {Produit} from '../../store/models/produit.model';

export class AddProduit {
    static readonly type = '[Produit] Add';

    constructor(public payload: Produit) {
    }
}

export class GetProduits {
    static readonly type = '[Produit] Get';
}

export class UpdateProduit {
    static readonly type = '[Produit] Update';

    constructor(public payload: Produit, public id: number) {
    }
}

export class DeleteProduit {
    static readonly type = '[Produit] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedProduit {
    static readonly type = '[Produit] Set';

    constructor(public payload: Produit) {
    }
}
