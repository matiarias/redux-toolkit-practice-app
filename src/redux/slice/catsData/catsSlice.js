import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  title: "Disfruta de gatitos hermosos randoms para tu día!",
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
