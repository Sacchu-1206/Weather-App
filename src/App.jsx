import { useState,useEffect } from "react";
import { getWeatherByCity,  getWeatherByCoords, getForecastByCity, } from "./services/weatherService";
import WeatherCard from "./components/weather/WeatherCard";
import SearchBar from "./components/weather/SearchBar";
import Forecast from "./components/weather/Forecast";
import Loader from "./components/common/Loader";
function App() {
  
  const [weather, setWeather] = useState(null);
   
  const [loading, setLoading] = useState(false);

   const [error, setError] = useState("");

   const [forecast, setForecast] = useState(null);

 const handleSearch = async (city) => {

  try {

    // Loading start
    setLoading(true);

    // Old error clear
    setError("");

    const data = await getWeatherByCity(city);

    const forecastData = await getForecastByCity(city);

setForecast(forecastData);

    setWeather(data);

    localStorage.setItem("lastCity", city);

  } catch (error) {

    setError("City not found");

  } finally {

    // Loading stop
    setLoading(false);
  }
};

const getCurrentLocationWeather = () => {

  navigator.geolocation.getCurrentPosition(

    async (position) => {

      try {

        setLoading(true);

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const data = await getWeatherByCoords(lat, lon);

        const forecastData =
  await getForecastByCity(data.name);

setForecast(forecastData);

        setWeather(data);

        localStorage.setItem("lastCity", data.name);

      } catch (error) {

       setError("Location weather unavailable");

      } finally {

        setLoading(false);
      }
    },

    () => {
      setError("Location access denied");
    }
  );
};

const loadLastCityWeather = async () => {

  const savedCity =
    localStorage.getItem("lastCity");

  if (!savedCity) return;

  try {

    setLoading(true);

    const data =
      await getWeatherByCity(savedCity);

    const forecastData =
      await getForecastByCity(savedCity);

    setWeather(data);
    setForecast(forecastData);

  } catch (error) {

    console.log("Saved city error:", error);

  } finally {

    setLoading(false);
  }
};

const getBackground = () => {

  if (!weather) {
    return "linear-gradient(to right, #1e3c72, #2a5298)";
  }

  const condition = weather.weather[0].main;

  switch (condition) {

    case "Clear":
      return "linear-gradient(to right, #4facfe, #00f2fe)";

    case "Clouds":
      return "linear-gradient(to right, #757f9a, #d7dde8)";

    case "Rain":
      return "linear-gradient(to right, #373b44, #4286f4)";

    case "Thunderstorm":
      return "linear-gradient(to right, #232526, #414345)";

    case "Snow":
      return "linear-gradient(to right, #e6dada, #274046)";

    default:
      return "linear-gradient(to right, #1e3c72, #2a5298)";
  }
};

useEffect(() => {

  const savedCity =
    localStorage.getItem("lastCity");

  if (savedCity) {

    loadLastCityWeather();

  } else {

    getCurrentLocationWeather();
  }

}, []);


const styles = {

  app: {
    minHeight: "100vh",
    padding: "20px",
    background: getBackground(),
    transition: "0.5s ease",
  },
};

  return (
    <div  style={styles.app} >
      <h1>Weather App</h1>

     <SearchBar onSearch={handleSearch} />

     {loading && <Loader />}
     
     {error && <p style={{ color: "yellow" }}>{error}</p>}
     
    <WeatherCard weather={weather} />

    <Forecast forecast={forecast} />
    </div>
  );
}

export default App;

