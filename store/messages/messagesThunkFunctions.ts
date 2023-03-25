import { createAsyncThunk } from "@reduxjs/toolkit";
import { MessageService } from "../../services/messageService";

const sendMsg = createAsyncThunk(
  "/messages/add",
  async (arg: { phone: number; msg: string }, { rejectWithValue }) => {
    try {
      const { phone, msg } = arg;
      const res = await MessageService.sendMessage({ phone, msg });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response);
    }
  }
);

const getAllMessages = createAsyncThunk(
  "/messages/{conversation_id}",
  async (
    arg: { phone: number; page: number },
    { rejectWithValue, getState }
  ) => {
    try {
      const { phone, page } = arg;
      const res = await MessageService.getAllMessages({ phone, page });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

const getAllConversations = createAsyncThunk(
  "/messages/conversation",
  async (arg: { page: number }, { rejectWithValue }) => {
    try {
      const { page } = arg;
      const res = await MessageService.getAllConversation({ page });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const MessageThunkActions = {
  getAllMessages,
  getAllConversations,
  sendMsg,
};
