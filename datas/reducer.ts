import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  data: [
    { text: "drink 1 glass of water", important: false, key: "0" },
    { text: "Meditate for 10 mins", important: false, key: "1" },
    { text: "sleep 9 pm", important: true, key: "2" },
    { text: "buy milk", important: true, key: "3" },
    { text: "read doc", important: false, key: "4" },
    { text: "prepare for exam", important: true, key: "6" },
    { text: "code react", important: false, key: "9" },
  ],
};

interface itemProp {
  payload: { text: string; important: boolean };
}
export interface stateProp {
  data: {
    text: string;
    important: boolean;
    key: string;
  }[];
}

const tasksReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTask: (state: stateProp, action: itemProp) => {
      const item = action.payload;
      const id = uuidv4();
      const result = { ...item, key: id };
      state.data.unshift(result);
    },
    deleteTask: (state, action: { payload: string }) => {
      const key = action.payload;
      const result = state.data.filter((each) => each.key !== key);
      state.data = result;
    },
    deleteAll: (state) => {
      state.data = [];
    },
  },
});

export const { addTask, deleteTask, deleteAll } = tasksReducer.actions;
export default tasksReducer.reducer;
