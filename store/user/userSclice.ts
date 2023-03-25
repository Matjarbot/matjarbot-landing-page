import { createSlice, isAnyOf, isRejectedWithValue } from "@reduxjs/toolkit";
import { UserThunkActions } from "./thunkFunctions";
import Cookies from "js-cookie";
import API from "../../lib/axios";

import API_BOT from "../../lib/bot";
export interface UserState {
  userInfo?: {
    id: number;
    username: string;
    email: string;
    fullname_ar: string;
    fullname_en: string;
    created_at: Date;
    updated_at: Date;
    phone: string;
  };
  unused: Array<any>;
  storeInfo?: any;
  token?: string;
  isLoading: boolean;
  isLogged: boolean;
  err: boolean;
  errMsg: string;
}
const initialState: UserState = {
  userInfo: undefined,
  token: undefined,
  isLogged: false,
  isLoading: true,
  err: false,
  unused: [],
  errMsg: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state: UserState) => {
      // state = init ialState;
      state.err = false;
      state.userInfo = undefined;
      state.token = undefined;
      state.unused = [];
      state.errMsg = "";
      API.defaults.headers.common["Authorization"] = ``;
      API_BOT.defaults.headers.common["Authorization"] = ``;
    },
    setToken: (state: UserState) => {
      state.token = Cookies.get("storeToken");

      API.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "storeToken"
      )}`;
      API_BOT.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "storeToken"
      )}`;
      state.isLogged = true;
      state.isLoading = false;
    },
    show: (state: UserState) => {
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(UserThunkActions.login.fulfilled, (state, action: any) => {
      Cookies.set("storeToken", action.payload.token);
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.storeInfo = action.payload.storeInfo;
      state.isLogged = true;
      state.isLoading = false;
      API.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
      API_BOT.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${state.token}`;
    });
    builder.addCase(
      UserThunkActions.unusedAreas.fulfilled,
      (state, action: any) => {
        state.unused = action.payload;
      }
    );
    builder.addCase(
      UserThunkActions.fetchUserData.fulfilled,
      (state, action: any) => {
        if (Cookies.get("storeToken")) {
          state.token = Cookies.get("storeToken");

          API.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${state.token}`;
          API_BOT.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${state.token}`;
          state.isLogged = true;
        }

        state.userInfo = action.payload.userInfo;
        state.storeInfo = action.payload;
        state.isLogged = true;
      }
    );
    builder.addCase(
      UserThunkActions.fetchUserData.rejected,
      (state, action) => {}
    );
    builder.addCase(
      UserThunkActions.fetchUserData.pending,
      (state, action) => {}
    );
    builder.addCase(UserThunkActions.login.rejected, (state, action: any) => {
      state.isLoading = false;
      state.err = true;
      state.errMsg = action.payload;
    });
    builder.addMatcher(
      isAnyOf(
        UserThunkActions.logout.pending,
        UserThunkActions.logout.fulfilled
      ),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(UserThunkActions.logout.fulfilled),
      (state, action: any) => {
        state.isLoading = false;
        state.userInfo = undefined;
        state.storeInfo = undefined;
        state.token = undefined;
        state.isLogged = false;
      }
    );
  },
});
export const { reset } = userSlice.actions;

export default userSlice.reducer;
