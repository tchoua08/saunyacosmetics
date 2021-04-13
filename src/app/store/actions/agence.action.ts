import {Agence} from '../../store/models/agence.model';

export class AddAgence {
    static readonly type = '[Agence] Add';

    constructor(public payload: Agence) {
    }
}

export class GetAgences {
    static readonly type = '[Agence] Get';
}

export class UpdateAgence {
    static readonly type = '[Agence] Update';

    constructor(public payload: Agence, public id: number) {
    }
}

export class DeleteAgence {
    static readonly type = '[Agence] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedAgence {
    static readonly type = '[Agence] Set';

    constructor(public payload: Agence) {
    }
}
