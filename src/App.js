import WeatherForm from "./feature/weather/WeatherForm";
import "./App.css";
import "./Styles/main.css";
import City from "./feature/city/City";

function App() {
  return (
    <div className="App">
      <City />
      <WeatherForm />
    </div>
  );
}

export default App;

/**
 * 1. done
 * 2.done
 * 3. configureStore done
 * 4. create weather slice done
 * 5.handle different states of async function done
 * 6. create City Component
 */
