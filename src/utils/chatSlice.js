import { createSlice } from "@reduxjs/toolkit";
import { CHAT_OFFSET_CLEAR } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.splice(CHAT_OFFSET_CLEAR, 1);
      state.chatMessages.unshift(action.payload);
    },
    clearChat: (state) => {
      state.chatMessages = [];
    },
  },
});

export const { addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
