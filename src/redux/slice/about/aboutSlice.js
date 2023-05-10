import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis ducimus eum illo laudantium ipsa temporibus dignissimos ullam facere quibusdam hic odio atque est, ratione odit nulla neque laborum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis ducimus eum illo laudantium ipsa temporibus dignissimos ullam facere quibusdam hic odio atque est, ratione odit nulla neque laborum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis ducimus eum illo laudantium ipsa temporibus dignissimos ullam facere quibusdam hic odio atque est, ratione odit nulla neque laborum maxime!",
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    aboutInfo: (state, action) => {
      state = action.payload;
    },
  },
});

export const { aboutInfo } = aboutSlice.actions;

export default aboutSlice.reducer;
