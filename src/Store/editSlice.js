import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApplication = createAsyncThunk(
  "edit/fetchApplication",
  async (url, id) => {
    const response = await fetch(url + id);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  editApplication: null,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setApplication(state, active) {
      return {};
    },
  },
  extraReducers: {},
});
