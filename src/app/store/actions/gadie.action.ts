import {Gadie} from '../../store/models/gadie.model';

export class AddGadie {
    static readonly type = '[Gadie] Add';

    constructor(public payload: Gadie) {
    }
}

export class GetGadies {
    static readonly type = '[Gadie] Get';
}

export class UpdateGadie {
    static readonly type = '[Gadie] Update';

    constructor(public payload: Gadie, public id: number) {
    }
}

export class DeleteGadie {
    static readonly type = '[Gadie] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedGadie {
    static readonly type = '[Gadie] Set';

    constructor(public payload: Gadie) {
    }
}
