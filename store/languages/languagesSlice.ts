import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export interface languageState {
  type: string;
}
const initialState: languageState = {
  type: Cookies.get('lang') || 'ar',
};
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    change: (state: languageState, action: any) => {
      state.type = action.payload;
    },
  },
});
export default languageSlice.reducer;
