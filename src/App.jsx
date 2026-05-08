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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather App</h1>

     <SearchBar onSearch={handleSearch} />

     {loading && <h2>Loading...</h2>}
     {error && <p style={{ color: "yellow" }}>{error}</p>}
     
    <WeatherCard weather={weather} />

    </div>
  );
}

export default App;