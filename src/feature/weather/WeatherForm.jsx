import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const WeatherForm = () => {
  let weatherItems = useSelector((state) => state.weather.items);
  const weatherDivs = useMemo(() => {
    if (weatherItems.length === 0) {
      return <div className="text-center">No Cards to Display</div>;
    } else {
      return weatherItems.map((i) => (
        <div
          key={i.location.lat + i.location.lon}
          className="weatherDiv m-3 border"
        >
          <div className="weatherName">
            {i.location.name}, {i.location.region}, {i.location.country}
          </div>
          <div className="typeOfWeather">
            <div className="weatherImg">
              <img
                src={i.current.condition.icon}
                alt={i.current.condition.text}
              />
              <div className="weatherTemp">
                <span>{i.current.temp_c}°</span>
              </div>
            </div>
            <div className="weatherDesc">
              <span>{i.current.condition.text}</span>
            </div>
          </div>
          <div className="weatherDetails d-flex flex-column ">
            <span>Feels Like {i.current.feelslike_c}°C</span>
            <span>Humidity: {i.current.humidity}%</span>
            <span>Pressure: {i.current.gust_kph}kph</span>
            <span>Vision: {i.current.vis_km}km</span>
          </div>
        </div>
      ));
    }
  }, [weatherItems]);
  return (
    <div>
      <h2>Weather</h2>
      <div className="weatherCards d-flex justify-content-center flex-wrap row row-cols-3">
        {weatherDivs}
      </div>
    </div>
  );
};

export default WeatherForm;

//     weatherItems.map((i) => (
//       <div
//         key={i.current.last_updated_epoch}
//         className="weatherDiv m-3 border"
//       >
//         <div className="weatherName">
//           {i.location.name}, {i.location.region}, {i.location.country}
//         </div>
//         {/* <div className="tempSwitch"></div> */}
//         <div className="typeOfWeather">
//           <div className="weatherImg">
//             <img
//               src={i.current.condition.icon}
//               alt={i.current.condition.text}
//             />
//             <div className="weatherTemp">
//               <span>{i.current.temp_c}°</span>
//             </div>
//           </div>
//           <div className="weatherDesc">
//             <span>{i.current.condition.text}</span>
//           </div>
//         </div>
//         <div className="weatherDetails d-flex flex-column ">
//           <span>Feels Like {i.current.feelslike_c}°C</span>
//           <span>Humidity: {i.current.humidity}%</span>
//           <span>Pressure: {i.current.gust_kph}kph</span>
//           <span>Vision: {i.current.vis_km}km</span>
//         </div>
//       </div>
//     ))
//   );
// }, [weatherItems]);
