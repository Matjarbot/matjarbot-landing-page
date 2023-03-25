import { createSlice } from "@reduxjs/toolkit";
import SocketService from "../../services/socketService";
import { messagesActions } from "./thunkFunctions";

let effect = typeof Audio != "undefined" ? new Audio("/mixk.wav") : undefined;

export interface messagesState {
  conversations: Array<any>;
  conversation: {
    name: string;
    number_client: string;
    messages: Array<any>;
    last_page: number;
    id: number;
    online: boolean;
  };
  unread: boolean;
  isErr: boolean;
  errMsg: string;
}
const initialState: messagesState = {
  conversations: [],
  conversation: {
    id: 0,
    name: "",
    number_client: "",
    messages: [],
    last_page: 1,
    online: false,
  },
  isErr: false,
  unread: false,
  errMsg: "",
};
export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state: messagesState, action: any) => {
      if (state.conversation.id === action.payload.conversation_id) {
        state.conversation.messages = [
          action.payload,
          ...state.conversation.messages,
        ];
        state.conversation.online = true;
        state.unread = true;
        if (!effect) effect = new Audio("/mixk.wav");
        effect.play();
        effect.loop = true;
      }
    },
    makeRead: (state: messagesState, action: any) => {
      state.unread = false;
      if (effect) {
        effect.pause();
      }
      if (action?.payload?.notify)
        SocketService.Instance().then((socket) =>
          socket.dispatchReadMessages()
        );
    },
    addClientMessage: (state: messagesState, action: any) => {
      state.conversation.messages = [
        action.payload,
        state.conversation.messages,
      ];
    },
  },
  extraReducers(builder) {
    builder.addCase(
      messagesActions.fetchConversations.fulfilled,
      (state, action) => {
        state.conversations = action.payload?.data;
        // if (action.payload.unread_conversations > 0) {
        //   if (!effect) effect = new Audio("/mixk.wav");
        //   effect.play();
        // }
      }
    );
    builder.addCase(
      messagesActions.fetchMessages.fulfilled,
      (state, action) => {
        state.conversation = action.payload;
      }
    );

    builder.addCase(messagesActions.endConversation.fulfilled, (state) => {
      state.conversation.online = false;
    });
  },
});
export default messagesSlice.reducer;
