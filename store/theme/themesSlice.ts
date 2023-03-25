import { createSlice } from "@reduxjs/toolkit";
export interface themeState {
  type: string;
}
const initialState: themeState = {
  type: "light",
};
export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    change: (state: themeState, action: any) => {
      state.type = action.payload;
    },
  },
});
export default themeSlice.reducer;
