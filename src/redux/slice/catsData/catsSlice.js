import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
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

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { fetchCats, setLoading } = catsSlice.actions;

export default catsSlice.reducer;
