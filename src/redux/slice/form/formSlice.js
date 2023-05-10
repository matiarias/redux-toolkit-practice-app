import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getFormData: (state, action) => {
      //   const { name, lastname, email } = action.payload;
      state.data = action.payload;

      //   state.name = name;
      //   state.lastname = lastname;
      //   state.email = email;
    },
  },
});

export const { getFormData } = formSlice.actions;

export default formSlice.reducer;
