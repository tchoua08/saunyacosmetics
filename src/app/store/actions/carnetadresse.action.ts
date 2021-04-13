import {CarnetAdresse} from '../../store/models/carnetadresse.model';

export class AddCarnetAdresse {
    static readonly type = '[CarnetAdresse] Add';

    constructor(public payload: CarnetAdresse) {
    }
}

export class GetCarnetAdresses {
    static readonly type = '[CarnetAdresse] Get';
}

export class UpdateCarnetAdresse {
    static readonly type = '[CarnetAdresse] Update';

    constructor(public payload: CarnetAdresse, public id: number) {
    }
}

export class DeleteCarnetAdresse {
    static readonly type = '[CarnetAdresse] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedCarnetAdresse {
    static readonly type = '[CarnetAdresse] Set';

    constructor(public payload: CarnetAdresse) {
    }
}
