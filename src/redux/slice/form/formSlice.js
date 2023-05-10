import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getFormData: (state, action) => {
      state.data = [...state.data, action.payload];

      //   state.name = name;
      //   state.lastname = lastname;
      //   state.email = email;
    },
  },
});

export const { getFormData, resetForm } = formSlice.actions;

export default formSlice.reducer;
