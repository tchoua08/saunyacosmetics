import {Souhait} from '../models/souhait.model';

export class AddSouhait {
    static readonly type = '[Souhait] Add';

    constructor(public payload: Souhait) {
    }
}

export class GetSouhaits {
    static readonly type = '[Souhait] Get';
}

export class UpdateSouhait {
    static readonly type = '[Souhait] Update';

    constructor(public payload: Souhait, public id: number) {
    }
}

export class DeleteSouhait {
    static readonly type = '[Souhait] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedSouhait {
    static readonly type = '[Souhait] Set';

    constructor(public payload: Souhait) {
    }
}
