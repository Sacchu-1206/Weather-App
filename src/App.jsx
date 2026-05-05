import { useState } from "react";
import { getWeatherByCity } from "./services/weatherService";

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
      <h1>WeatherX Pro</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;