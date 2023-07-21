import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCities } from "./citySlice";
import { fetchData } from "./citySlice";
import { fetchCityWeather } from "../weather/weatherSlice";

function City() {
  const dispatch = useDispatch();
  const cityValues = useSelector((state) => state.city.cities);
  const searchButtonHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      dispatch(clearCities());
    } else {
      dispatch(fetchData(e.target.value));
    }
  };
  const getWeatherCard = useCallback(
    (e, v) => {
      e.preventDefault();
      dispatch(fetchCityWeather(v.url));
      document.querySelector("#searchInput").textContent = "";
    },
    [dispatch]
  );
  return (
    <form>
      <input
        id="searchInput"
        type="text"
        placeholder="City/Country..."
        onChange={(e) => searchButtonHandler(e)}
      />
      <div className="searchResults d-flex flex-column text-start">
        {cityValues.map((v) => (
          <div
            role="button"
            type="submit"
            key={v.id}
            onClick={(e) => getWeatherCard(e, v)}
            className="bg-white  searchValue"
          >
            {v.name}, {v.region}, {v.country}
          </div>
        ))}
      </div>
    </form>
  );
}

export default City;
