import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrPost: [],
  postDetial: "",
};

const postsReducer = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setPostsReducer: (state, action) => {
      state.arrPost = action.payload;
    },
    setPostDetail: (state, action) => {
      console.log(action);
      //   let arrPost = [...state.arrPost];
      //   console.log({ arrPost });
      //   let post = arrPost.find((item) => item.id === action.payload);
      //   console.log({ post });
      //   state.postDetial = state.arrPost.arrPost[action.payload];
    },
    pushNewPost: (state, action) => {
      state.arrPost.push(action.payload);
    },
    deletePost: (state, action) => {
      console.log({ action });
      let index = state.arrPost.findIndex((item) => item.id === action.payload);
      console.log({ index });
      state.arrPost = state.arrPost.splice(index, 1);
    },
  },
});

export const { setPostsReducer, setPostDetail, pushNewPost, deletePost } =
  postsReducer.actions;

export default postsReducer.reducer;
