import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { text: "drink 1 glass of water", time: "morning", key: "0" },
    { text: "Meditate for 10 mins", time: "night", key: "1" },
    { text: "sleep 9 pm", time: "night", key: "2" },
    { text: "buy milk", time: "morning", key: "3" },
    { text: "read doc", time: "afternoon", key: "4" },
    { text: "sleep for 5min", time: "evening", key: "5" },
    { text: "prepare for exam", time: "morning", key: "6" },
    { text: "cook chicken", time: "evening", key: "7" },
    { text: "play football", time: "evening", key: "8" },
    { text: "code react", time: "night", key: "9" },
    { text: "build stamina", time: "afternoon", key: "10" },
    { text: "Meditate for 20 mins", time: "evening", key: "11" },
  ],
};
const tasksReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const item = action.payload;
      state.data.push(item);
    },
    deleteTask: (state, action) => {
      const key = action.payload;
      const result = state.data.filter((each) => each.key !== key);
      state.data = result;
    },
  },
});

export const { addTask, deleteTask } = tasksReducer.actions;
export default tasksReducer.reducer;
