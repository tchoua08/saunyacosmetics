import {Booking} from '../../store/models/booking.model';

export class AddBooking {
    static readonly type = '[Booking] Add';

    constructor(public payload: Booking) {
    }
}

export class GetBookings {
    static readonly type = '[Booking] Get';
}

export class UpdateBooking {
    static readonly type = '[Booking] Update';

    constructor(public payload: Booking, public id: number) {
    }
}

export class DeleteBooking {
    static readonly type = '[Booking] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedBooking {
    static readonly type = '[Booking] Set';

    constructor(public payload: Booking) {
    }
}
