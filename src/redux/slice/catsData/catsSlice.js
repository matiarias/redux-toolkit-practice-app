import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
};

export const catsSlice = createSlice({
  name: "catsApi",
  initialState,
  reducers: {
    fetchCats: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchCats } = catsSlice.actions;

export default catsSlice.reducer;
