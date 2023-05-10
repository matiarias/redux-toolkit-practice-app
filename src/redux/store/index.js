import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slice/form/formSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
