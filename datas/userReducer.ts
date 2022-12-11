import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "Myo",
  secondname: "Thu",
  profile: 1,
};

const user = createSlice({
  name: "user data",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.firstname = action.payload.first;
      state.secondname = action.payload.second;
    },
  },
});

export default user.reducer;
export const { updateName } = user.actions;
