import {
  createSlice,
  isAllOf,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { EOrderPaidStatus, EOrderStatus } from "../../Enums/EOrderStatus";
import { ReservationMatchers } from "./matchers";
import { ReservationThunkActions } from "./thunkFunctions";
const {
  isReservationFetch,
  isReservationFetchFullfiled,
  isReservationFetchPending,
  isReservationFetchRejected,
  isItemsFetchFulfilled,
  isItemsFetchPending,
  isItemsFetchRejected,
  isCurrReservationFetchFillfiled,
  isCurrReservationFetchPending,
  isCurrReservationFetchRejectd,
  isReservation,
} = ReservationMatchers;

const { acceptReservation, delayReservation, rejectReservation } =
  ReservationThunkActions;

export interface ReservationState {
  reservationBar: {
    data: any[];
  };
  reservationsPage: {
    data: [];
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
    params: {
      status: number;
      paid: number;
    };
    items: {
      data: [];
      current_page: number;
      last_page: number;
      total: number;
      per_page: number;
      params: {
        status: number;
        paid: number;
      };
    };
    isLoading: boolean;
  };
  currReservation: {
    data: any;
    isAcceptLoading: boolean;
    isRejectLoading: boolean;
    isDelayLoading: boolean;
    isCompleteLoading: boolean;
    isPayLoading: boolean;
    isErr: boolean;
    err: any;
  };
  isLoading: boolean;
  isRead: boolean;
  isErr: boolean;
  errMsg: string;
}
const initialState: ReservationState = {
  reservationBar: {
    data: [],
  },
  reservationsPage: {
    data: [],
    current_page: 1,
    last_page: 1,
    total: 12,
    per_page: 12,
    params: {
      status: EOrderStatus.ALL,
      paid: EOrderPaidStatus.ALL,
    },
    items: {
      data: [],
      current_page: 1,
      last_page: 1,
      total: 12,
      per_page: 12,
      params: {
        status: EOrderStatus.ALL,
        paid: EOrderPaidStatus.ALL,
      },
    },
    isLoading: false,
  },
  currReservation: {
    data: null,
    isAcceptLoading: false,
    isDelayLoading: false,
    isPayLoading: false,
    isRejectLoading: false,
    isCompleteLoading: false,
    isErr: false,
    err: "",
  },
  isLoading: false,
  isRead: true,
  isErr: false,
  errMsg: "",
};

const assignState = (state: any, payload: any) => {
  const { data, current_page, last_page, total, per_page, params } = payload;
  state.data = data;
  state.current_page = current_page;
  state.last_page = last_page;
  state.total = total;
  state.per_page = per_page;
  state.params = params;
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setCurrReservation: (state: ReservationState, action: any) => {
      state.currReservation = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      ReservationThunkActions.getReservation.fulfilled,
      (state: ReservationState, action: any) => {
        state.currReservation = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(
        acceptReservation.fulfilled,
        rejectReservation.fulfilled,
        delayReservation.fulfilled
      ),
      (state: ReservationState, action: any) => {
        const data: any = state.reservationsPage.items.data;
        const { payload } = action;
        state.reservationsPage.items.data = data.map((reserve: any) =>
          reserve.id == payload?.id
            ? { ...reserve, ...payload, isLoading: false }
            : reserve
        );
      }
    );
    builder.addMatcher(
      isAnyOf(
        acceptReservation.pending,
        rejectReservation.pending,
        delayReservation.pending
      ),
      (state: ReservationState, action: any) => {
        console.log(action);
        const data: any = state.reservationsPage.items.data;
        const { arg } = action.meta;
        state.reservationsPage.items.data = data.map((reserve: any) =>
          reserve.id == arg.id ? { ...reserve, isLoading: true } : reserve
        );
      }
    );

    builder.addMatcher(
      isAnyOf(
        acceptReservation.rejected,
        rejectReservation.rejected,
        delayReservation.rejected
      ),
      (state: ReservationState, action: any) => {
        console.log(action);
        const data: any = state.reservationsPage.items.data;
        const { payload } = action;
        state.reservationsPage.items.data = data.map((reserve: any) =>
          reserve.id == payload.id ? { ...reserve, isLoading: false } : reserve
        );
      }
    );

    builder.addMatcher(
      isReservationFetchFullfiled,
      (state: ReservationState, action: any) => {
        console.log(action.payload);
        assignState(state.reservationsPage, action.payload);
      }
    );

    builder.addMatcher(
      isItemsFetchFulfilled,
      (state: ReservationState, action: any) => {
        console.log(action.payload);
        assignState(state.reservationsPage.items, action.payload);
        console.log(state);
      }
    );

    builder.addMatcher(
      isAllOf(isReservation, isAnyOf(isRejected, isFulfilled)),
      (state: ReservationState, action: any) => {
        state.isLoading = false;
      }
    );

    builder.addMatcher(
      isAllOf(isReservation, isPending),
      (state: ReservationState, action: any) => {
        state.isLoading = true;
      }
    );
  },
});

export const { setCurrReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
