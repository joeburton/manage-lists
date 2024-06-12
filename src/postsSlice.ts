// postSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "./data";

interface Post {
  title: string;
  content: string;
}

type Posts = Post[];

const initialState: Posts = data;

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.title !== action.payload.title);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
