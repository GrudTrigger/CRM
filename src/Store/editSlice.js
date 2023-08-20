import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApplication = createAsyncThunk(
  "edit/fetchApplication",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

export const updateApplication = createAsyncThunk(
  "edit/updateApplication",
  async (arg) => {
    const { url, data } = arg;
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return data;
  },
);

export const deleteApplication = createAsyncThunk(
  "edit/deleteApplication",
  async (url) => {
    await fetch(url, {
      method: "DELETE",
    });
  },
);

const initialState = {
  application: null,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editApplication(state, action) {
      const { name, value } = action.payload;
      state.application[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApplication.fulfilled, (state, action) => {
      state.application = action.payload;
    });
    builder.addCase(updateApplication.fulfilled, (state, action) => {
      state.application = action.payload;
    });
    builder.addCase(deleteApplication.fulfilled, (state, action) => {
      state.application = null;
    });
  },
});

export const { editApplication } = editSlice.actions;
export default editSlice.reducer;
