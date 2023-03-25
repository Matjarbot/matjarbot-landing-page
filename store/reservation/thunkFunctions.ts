import { Data } from "@react-google-maps/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationService } from "../../services/reservationService";
import { ReservationState } from "./reservationSlice";

const fetchAllReservations = createAsyncThunk(
  "reservation/fetch/reservation",
  async (args: { filter: any }, { getState }) => {
    const state: ReservationState = (getState() as any).reservation;
    const { filter } = args;
    console.log(filter);
    const reservations = await ReservationService.findAll({
      filter: {
        ...filter,
      },
    });
    return reservations.data;
  }
);

const fetchItems = createAsyncThunk(
  "reservation/fetch/items",
  async (args: { filter: any }, { getState, rejectWithValue }) => {
    try {
      console.log("fetching items");
      const state: ReservationState = (getState() as any).reservation;
      const { filter } = args;
      console.log(filter);
      console.log(state.reservationsPage.items.params);
      const reservations = await ReservationService.findAllItems({
        ...state.reservationsPage.items.params,
        ...filter,
      });
      return {
        ...reservations.data.data,
        params: { ...state.reservationsPage.items.params, ...filter },
      };
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const fetchReservation = createAsyncThunk(
  "reservation/fetch/{id}",
  async (args: { filter: any }, { getState }) => {
    const state: ReservationState = (getState() as any).reservation;
    const { filter } = args;
    const reservations = await ReservationService.findAllItems({
      ...state.reservationsPage.items.params,
      ...filter,
    });
    return reservations.data;
  }
);

const acceptReservation = createAsyncThunk(
  "reservation/accept/{id}",
  async (args: { id: number }) => {
    const { id } = args;
    const res = await ReservationService.acceptReserve({ id });
    return res.data;
  }
);

const rejectReservation = createAsyncThunk(
  "reservation/accept/{id}",
  async (args: { id: number }) => {
    const { id } = args;
    const res = await ReservationService.cancelReserve({ id });
    return res.data;
  }
);

const delayReservation = createAsyncThunk(
  "reservation/accept/{id}",
  async (args: { id: number }) => {
    const { id } = args;
    const res = await ReservationService.delayReserve({ id });
    return res.data;
  }
);

const payReservation = createAsyncThunk(
  "reservation/accept/{id}",
  async (args: { filter: any }) => {}
);
const getReservation = createAsyncThunk("reservation/id", async (args: any) => {
  const res = await ReservationService.findItem(args.id);
  return res;
});
const updateEmployee = createAsyncThunk(
  "reservation/employee/id",
  async (
    args: { item_id: number; selected: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { item_id, selected } = args;
      await ReservationService.updateEmployee({
        item_id,
        employee_id: selected,
      });
      dispatch(getReservation({ id: item_id }));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const addNote = createAsyncThunk(
  "reservation/note/id",
  async (
    args: { id: number; notes: string; item_id: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { id, notes, item_id } = args;
      await ReservationService.addNotes({ id, notes });
      dispatch(getReservation({ id: item_id }));
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const ReservationThunkActions = {
  fetchAllReservations,
  fetchItems,
  fetchReservation,
  acceptReservation,
  rejectReservation,
  delayReservation,
  payReservation,
  addNote,
  updateEmployee,
  getReservation,
};
