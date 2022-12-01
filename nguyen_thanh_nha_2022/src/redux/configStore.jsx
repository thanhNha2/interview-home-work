import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./commentsReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export const store = configureStore({
  reducer: {
    commentsReducer: commentsReducer,
    postsReducer: postsReducer,
    usersReducer: usersReducer,
  },
});
