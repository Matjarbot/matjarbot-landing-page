import { citiesSlice } from "./citiesSlice";
import { citiesActions as citiesThunkActions } from "./thunkFunctions";
export const CitiesActions = {
  ...citiesThunkActions,
  ...citiesSlice.actions,
};
