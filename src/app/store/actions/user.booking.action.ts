import {UserBooking} from '../../store/models/user.booking.model';

export class AddUserBooking {
    static readonly type = '[UserBooking] Add';

    constructor(public payload: UserBooking) {
    }
}

export class GetUserBookings {
    static readonly type = '[UserBooking] Get';
}

export class UpdateUserBooking {
    static readonly type = '[UserBooking] Update';

    constructor(public payload: UserBooking, public id: number) {
    }
}

export class DeleteUserBooking {
    static readonly type = '[UserBooking] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedUserBooking {
    static readonly type = '[UserBooking] Set';

    constructor(public payload: UserBooking) {
    }
}
