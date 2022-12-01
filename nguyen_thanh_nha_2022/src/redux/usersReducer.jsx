import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrUser: [],
};

const usersReducer = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {
    setUserReducer: (state, action) => {
      state.arrUser = action.payload;
    },
  },
});

export const { setUserReducer } = usersReducer.actions;

export default usersReducer.reducer;
