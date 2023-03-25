import { createAsyncThunk } from "@reduxjs/toolkit";
import { MessagesService } from "../../services/messagesService";
const fetchConversations = createAsyncThunk("conversations/fetch", async () => {
  try {
    const data = await MessagesService.getConversations();
    return data.data;
  } catch (err) {
    console.log(err);
  }
});
const revalidateMessages = createAsyncThunk(
  "messages/revalidate",
  async (args: any, { dispatch }) => {
    try {
      dispatch(fetchConversations());
      dispatch(fetchMessages(args));
    } catch (error) {
      console.log(error);
    }
  }
);
const revalidateConversations = createAsyncThunk(
  "messages/revalidate",
  async (args: any, { dispatch }) => {
    try {
      dispatch(fetchConversations());
    } catch (error) {
      console.log(error);
    }
  }
);
const fetchMessages = createAsyncThunk(
  "messages/fetch",
  async (args: any, { dispatch }) => {
    try {
      const data = await MessagesService.getMessages(args.id, args.page);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const endConversation = createAsyncThunk(
  "/messages/conversation/:id/end",
  async (arg: { id: number; username: string }, { rejectWithValue }) => {
    try {
      const { id, username } = arg;
      const res = await MessagesService.endConversation({ id, username });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response);
    }
  }
);
const makeRead = createAsyncThunk(
  "/message/conversation/:id/isRead",
  async (arg: { id: string }) => {
    try {
      const { id } = arg;
      const res = await MessagesService.makeRead(id);
      return res.data;
    } catch {}
  }
);
export const messagesActions = {
  fetchMessages,
  revalidateMessages,
  makeRead,
  fetchConversations,
  revalidateConversations,
  endConversation,
};
