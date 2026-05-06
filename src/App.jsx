import { useState } from "react";
import { getWeatherByCity } from "./services/weatherService";
import WeatherCard from "./components/weather/WeatherCard";
import SearchBar from "./components/weather/SearchBar";
function App() {
  
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather App</h1>

     <SearchBar onSearch={handleSearch} />

    <WeatherCard weather={weather} />
    </div>
  );
}

export default App;