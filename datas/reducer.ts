import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { text: "drink 1 glass of water", key: "0" },
    { text: "Meditate for 10 mins", key: "1" },
    { text: "drink 1 glass of water", key: "2" },
    { text: "Meditate for 10 mins", key: "3" },
    { text: "drink 1 glass of water", key: "4" },
    { text: "drink 1 glass of water", key: "5" },
    { text: "drink 1 glass of water", key: "6" },
    { text: "Meditate for 10 mins", key: "7" },
    { text: "Meditate for 10 mins", key: "8" },
    { text: "Meditate for 10 mins", key: "9" },
    { text: "drink 1 glass of water", key: "10" },
    { text: "Meditate for 10 mins hey", key: "11" },
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
