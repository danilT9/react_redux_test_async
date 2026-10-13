import { configureStore } from "@reduxjs/toolkit";
import travelsSlice from "./travelsSlice";

export const store = configureStore({
  reducer: {
    travels: travelsSlice
  }
})