import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("table/fetchData", async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const initialState = {
  filterData: null,
  statusFilter: "all",
  courseFilter: "all",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setFilterData(state, action) {
      state.filterData = action.payload;
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload;
    },
    setCourseFilter(state, action) {
      state.courseFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.filterData = action.payload;
    });
  },
});

export const { setFilterData, setStatusFilter, setCourseFilter } =
  tableSlice.actions;
export default tableSlice.reducer;
