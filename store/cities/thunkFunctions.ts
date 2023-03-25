import { createAsyncThunk } from "@reduxjs/toolkit";
import citiesService from "../../services/citiesService";
const fetchCities = createAsyncThunk("cities/fetch", async (args: any) => {
  try {
    const data = await citiesService.findAll();
    return data;
  } catch (err) {
    console.log(err);
  }
});
export const citiesActions = {
  fetchCities,
};
