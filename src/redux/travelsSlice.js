import { createSlice } from "@reduxjs/toolkit";
import initialTravels from "../data/data.json";

const initialState = {
  items: initialTravels,
  filters: {
    search: "",
    category: "all",
    status: "all",
  },
  sort: "By price (from lowest to highest)"
};

const travelsSlice = createSlice({
  name: "travels",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload
    },
    setCategory(state, action) {
      state.filters.category = action.payload
    },
    setStatus(state, action) {
      state.filters.status = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    clearFilter(state) {
      state.filters.search = "";
      state.filters.category = "all";
      state.filters.status = "all";
    },
    updateTravelStatus(state, action) {
      const { id, status } = action.payload
      const travel = state.items.find(i => i.id === id)
      if (travel) {
        travel.status = status
      }
    }
  }
});

export const { setSearch, setCategory, setStatus, setSort, clearFilter, updateTravelStatus } = travelsSlice.actions;

export default travelsSlice.reducer;