import { createSlice } from "@reduxjs/toolkit";

const addFormState = createSlice({
  name: "addForm",
  initialState: {
    name: "",
    phone: "",
    email: "",
    product: "course-html",
    status: "new",
  },
  reducers: {
    clearForm(state, _) {
      state.name = "";
      state.phone = "";
      state.email = "";
      state.product = "";
      state.status = "";
    },
  },
});

export default addFormState.reducer;
export const { clearForm } = addFormState.actions;
