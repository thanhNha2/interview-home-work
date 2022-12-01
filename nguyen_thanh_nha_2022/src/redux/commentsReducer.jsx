import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [],
};

const commentsReducer = createSlice({
  name: "commentsReducer",
  initialState,
  reducers: {
    setCommentReducer: (state, action) => {
      state.arrComment = action.payload;
    },
  },
});

export const { setCommentReducer } = commentsReducer.actions;

export default commentsReducer.reducer;
