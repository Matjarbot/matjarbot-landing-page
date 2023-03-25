import { UserThunkActions } from "./thunkFunctions";
import { userSlice } from "./userSclice";
export const UserActions = {
  ...userSlice.actions,
  ...UserThunkActions,
};
