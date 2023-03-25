import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/userService";
import API from "../../lib/axios";
import API_BOT from "../../lib/bot";
import Cookies from "js-cookie";

const login = createAsyncThunk(
  "user/doAuth",
  async (arg: any, { rejectWithValue }) => {
    try {
      const token = await UserService.login(arg.email, arg.password);
      await Cookies.set("storeToken", token.data);

      API.defaults.headers.common["Authorization"] = `Bearer ${token.data}`;
      API_BOT.defaults.headers.common["Authorization"] = `Bearer ${token.data}`;

      const storeInfo = await UserService.getStoreInfo();
      const { user, ...store } = storeInfo.data;
      return { token: token?.data, userInfo: user, storeInfo: store };
    } catch (error: any) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

//create logout asyncThunk function
const logout = createAsyncThunk("user/doLogout", async () => {
  try {
    await UserService.logout();
    await Cookies.remove("storeToken");
    API.defaults.headers.common["Authorization"] = ``;
    API_BOT.defaults.headers.common["Authorization"] = ``;
    return true;
  } catch (err: any) {
    console.log(err);
    return false;
  }
});

const fetchUserData = createAsyncThunk("user/get_store_info", async () => {
  try {
    const response = await UserService.getStoreInfo();
    return response?.data;
  } catch (err) {
    throw "test";
  }
});
const revalidateUser = createAsyncThunk(
  "user/revalidate",
  async (arg, { rejectWithValue, dispatch }) => {
    try {
      await UserService.logout();
      await Cookies.remove("storeToken");
      API.defaults.headers.common["Authorization"] = ``;
      API_BOT.defaults.headers.common["Authorization"] = ``;
      return true;
    } catch {}
  }
);
const refreshUsers = createAsyncThunk(
  "user/refresh",
  async (arg, { dispatch }) => {
    try {
      await dispatch(fetchUserData());
    } catch {}
  }
);
const revalidateUserAreas = createAsyncThunk(
  "user/revalidate",
  async (arg, { rejectWithValue, dispatch }) => {
    try {
      dispatch(unusedAreas());
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
const addCoverageArea = createAsyncThunk(
  "user/add_coverage_area",
  async (arg: any, { dispatch }) => {
    try {
      await UserService.addCoverage(arg.id, arg.regions);
      dispatch(refreshUsers());
      dispatch(revalidateUserAreas());
    } catch (error) {}
  }
);
const unusedAreas = createAsyncThunk("user/unused_areas", async () => {
  try {
    const data = await UserService.unusedAreas();
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const UserThunkActions = {
  login,
  logout,
  fetchUserData,
  addCoverageArea,
  unusedAreas,
};
