import {MessageSlice} from "./messageSlice";
import { MessageThunkActions } from "./messagesThunkFunctions";

export const MessageActions = {
    ...MessageThunkActions,
    ...MessageSlice.actions
};