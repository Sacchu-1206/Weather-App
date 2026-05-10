import { useState } from "react";
import { getWeatherByCity } from "./services/weatherService";
import WeatherCard from "./components/weather/WeatherCard";
import SearchBar from "./components/weather/SearchBar";
function App() {
  
  const [weather, setWeather] = useState(null);
   
  const [loading, setLoading] = useState(false);

   const [error, setError] = useState("");

 const handleSearch = async (city) => {

  try {

    // Loading start
    setLoading(true);

    // Old error clear
    setError("");

    const data = await getWeatherByCity(city);

    setWeather(data);

  } catch (error) {

    setError("City not found");

  } finally {

    // Loading stop
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

     {loading && <h2>Loading...</h2>}
     {error && <p style={{ color: "yellow" }}>{error}</p>}
     
    <WeatherCard weather={weather} />

    </div>
  );
}

export default App;

