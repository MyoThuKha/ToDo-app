import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { text: "drink 1 glass of water", time: "morning", key: "0" },
    { text: "Meditate for 10 mins", time: "night", key: "1" },
    { text: "sleep 9 pm", time: "night", key: "2" },
    { text: "buy milk", time: "morning", key: "3" },
    { text: "read doc", time: "afternoon", key: "4" },
    { text: "prepare for exam", time: "morning", key: "6" },
    { text: "code react", time: "night", key: "9" },
  ],
};

interface itemProp {
  payload: { text: string; time: string };
}
interface stateProp {
  data: itemProp[];
}

const tasksReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTask: (state, action: itemProp) => {
      const item = action.payload;
      // cosnt id = uuid.v4()
      const result = { ...item, key: "" };
      state.data.push(result);
    },
    deleteTask: (state, action: { payload: string }) => {
      const key = action.payload;
      const result = state.data.filter((each) => each.key !== key);
      state.data = result;
    },
  },
});

export const { addTask, deleteTask } = tasksReducer.actions;
export default tasksReducer.reducer;
