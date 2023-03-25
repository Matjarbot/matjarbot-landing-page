import { createSlice } from "@reduxjs/toolkit";
import { MessageThunkActions } from "./messagesThunkFunctions";
const { getAllConversations, getAllMessages, sendMsg } = MessageThunkActions;

interface MessageState {
  conversations: ConversationState[];
  curr_conversation?: number;
  current_page: number;
  last_page: number;
  total_items: number;
  per_page: number;
  isLoading: boolean;
}

interface ConversationState {
  data: [];
  current_page: number;
  last_page: number;
  total_items: number;
  per_page: number;
  isLoading: boolean;
}

const initialState: MessageState = {
  conversations: [],

  current_page: 1,
  last_page: 1,
  total_items: 1,
  per_page: 12,
  isLoading: true,
};

const assignState = (state: any, payload: any) => {
  const { current_page, last_page, total_items, per_page, isLoading } = payload;
  state.current_page = current_page;
  state.last_page = last_page;
  state.total_items = total_items;
  state.per_page = per_page;
  state.isLoading = isLoading;
};

export const MessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getAllConversations.fulfilled,
      (state: MessageState, action: any) => {
        assignState(state, action.payload);
        state.conversations = action.payload.data;
      }
    );

    //builder.addCase(getAllMessages)
  },
});

export default MessageSlice.reducer;
