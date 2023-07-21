import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addWeather: (state, action) => {
      console.log(state.items.length);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.status = "loading";
        console.log(state.status);
      })
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex(
          (item) =>
            item.location.lat === action.payload.location.lat &&
            item.location.lon === action.payload.location.lon
        );
        if (index === -1) {
          state.items.push(action.payload);
        } else {
        }
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addWeather } = weatherSlice.actions;

export default weatherSlice.reducer;

export const fetchCityWeather = createAsyncThunk(
  "data/fetchWeather",
  async (url) => {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/current.json?key=a05c7c2a2aae40feb82131443230105&q=" +
        url
    );
    const data = await response.data;
    console.log("data", data);
    return data;
  }
);
