import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { citiesActions } from "./thunkFunctions";
export interface citiesState {
  data: Array<any>;
  isLoading: boolean;
  isErr: boolean;
  errMsg: string;
}
const initialState: citiesState = {
  data: [],
  isLoading: true,
  isErr: false,
  errMsg: "",
};
export const citiesSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(citiesActions.fetchCities.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addMatcher(isPending, (state: citiesState) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(isRejected, isFulfilled),
      (state: citiesState) => {
        state.isLoading = false;
      }
    );
  },
});
export default citiesSlice.reducer;
