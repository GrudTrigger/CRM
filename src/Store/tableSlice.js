import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setFilterData, setStatusFilter, setCourseFilter } =
  tableSlice.actions;
export default tableSlice.reducer;
