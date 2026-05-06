import { useState } from "react";
import { getWeatherByCity } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
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

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

    <WeatherCard weather={weather} />
    </div>
  );
}

export default App;