import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  profile: 1,
  background: "black",
  foreground: "white",
};

const user = createSlice({
  name: "user data",
  initialState,
  reducers: {},
});

export default user.reducer;
