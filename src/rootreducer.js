import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./feature/weather/weatherSlice";
import cityReducer from "./feature/city/citySlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  city: cityReducer,
});

export default rootReducer;
