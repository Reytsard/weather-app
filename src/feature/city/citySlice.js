import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const citySlice = createSlice({
  name: "city",
  initialState: {
    name: "",
    cities: [],
    isLoading: false,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    clearCities: (state) => {
      state.cities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = [...action.payload];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

export const { changeName, clearCities } = citySlice.actions;

export default citySlice.reducer;

export const fetchData = createAsyncThunk("data/fetch", async (location) => {
  const url =
    "https://api.weatherapi.com/v1/search.json?key=a05c7c2a2aae40feb82131443230105&q=" +
    location;
  return (await axios.get(url)).data;
});
