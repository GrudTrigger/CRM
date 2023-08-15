import { configureStore } from "@reduxjs/toolkit";
import addFormReducer from "./addFormReducer";
export const store = configureStore({
  reducer: {
    addForm: addFormReducer,
  },
});
