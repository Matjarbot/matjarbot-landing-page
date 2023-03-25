import { isAllOf, isAnyOf, isAsyncThunkAction, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { ReservationThunkActions as ReservationActions } from "./thunkFunctions";

const { fetchAllReservations, fetchReservation, fetchItems } = ReservationActions;
const isReservationFetch = isAsyncThunkAction(
    fetchAllReservations
)

const isCurrReservationFetch = isAsyncThunkAction(
    fetchReservation
)

const isReservation=isAsyncThunkAction(
    fetchAllReservations, 
    fetchReservation, 
    fetchItems
)

const isReservationFetchFullfiled = isAllOf(isReservationFetch, isFulfilled)
const isReservationFetchPending = isAllOf(isReservationFetch, isPending)
const isReservationFetchRejected = isAllOf(isReservationFetch, isRejected)
const isAnyReservationFetch = isAnyOf(isReservationFetchFullfiled, isReservationFetchPending, isReservationFetchRejected)

const isCurrReservationFetchFillfiled = isAllOf(isCurrReservationFetch, isFulfilled)
const isCurrReservationFetchPending = isAllOf(isCurrReservationFetch, isPending)
const isCurrReservationFetchRejectd = isAllOf(isCurrReservationFetch, isRejected)
const isAnyCurrReservationFetch = isAnyOf(isCurrReservationFetchFillfiled, isCurrReservationFetchPending, isCurrReservationFetchRejectd)

const isItemsFetch = isAsyncThunkAction(fetchItems)
const isItemsFetchFulfilled = isAllOf(isItemsFetch, isFulfilled)
const isItemsFetchPending = isAllOf(isItemsFetch, isPending)
const isItemsFetchRejected = isAllOf(isItemsFetch, isRejected)

export const ReservationMatchers = {
    isReservationFetch,
    isReservationFetchFullfiled,
    isReservationFetchPending,
    isReservationFetchRejected,
    isCurrReservationFetchFillfiled,
    isCurrReservationFetchPending,
    isCurrReservationFetchRejectd,
    isAnyReservationFetch,
    isAnyCurrReservationFetch,
    isItemsFetchFulfilled,
    isItemsFetchPending,
    isItemsFetchRejected,
    isReservation
}