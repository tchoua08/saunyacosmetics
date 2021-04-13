import {Prestation} from '../../store/models/prestation.model';

export class AddPrestation {
    static readonly type = '[Prestation] Add';

    constructor(public payload: Prestation) {
    }
}

export class GetPrestations {
    static readonly type = '[Prestation] Get';
}

export class UpdatePrestation {
    static readonly type = '[Prestation] Update';

    constructor(public payload: Prestation, public id: number) {
    }
}

export class DeletePrestation {
    static readonly type = '[Prestation] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedPrestation {
    static readonly type = '[Prestation] Set';

    constructor(public payload: Prestation) {
    }
}
