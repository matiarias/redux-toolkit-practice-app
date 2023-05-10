import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slice/form/formSlice";
import catsSlice from "../slice/catsData/catsSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    catsApi: catsSlice,
  },
});
