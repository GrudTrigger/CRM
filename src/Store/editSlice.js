import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApplication = createAsyncThunk(
  "edit/fetchApplication",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

export const uptadeApplication = createAsyncThunk(
  "uptadeApplication",
  async (arg) => {
    const { url, data } = arg;
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const updateData = await response.json();
    return updateData;
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
    builder.addCase(uptadeApplication.fulfilled, (state, action) => {
      state.application = action.payload;
    });
  },
});

export const { editApplication } = editSlice.actions;
export default editSlice.reducer;
