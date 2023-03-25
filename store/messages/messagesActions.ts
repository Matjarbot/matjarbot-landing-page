import { messagesSlice } from "./messagesSlice";
import { messagesActions as messagesThunkFunctions } from "./thunkFunctions";
export const MessagesActions = {
  ...messagesThunkFunctions,
  ...messagesSlice.actions,
};
