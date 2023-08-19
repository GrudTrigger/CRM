import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";
import editReducer from "./editSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
    edit: editReducer,
  },
});

export default store;
