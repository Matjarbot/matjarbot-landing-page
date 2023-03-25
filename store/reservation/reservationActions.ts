import { reservationSlice } from "./reservationSlice";
import { ReservationThunkActions } from "./thunkFunctions";

export const ReservationActions = {
    ...ReservationThunkActions,
    ...reservationSlice.actions
}