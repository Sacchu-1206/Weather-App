const WeatherCard = ({ weather }) => {

  if (!weather) return null;

  const condition = weather.weather[0].main;

  const getWeatherIcon = () => {

  switch (condition) {

    case "Clear":
      return "☀️";

    case "Clouds":
      return "☁️";

    case "Rain":
      return "🌧️";

    case "Thunderstorm":
      return "⛈️";

    case "Snow":
      return "❄️";

    default:
      return "🌤️";
  }
};

  return (
    <div style={styles.card}>

      <h2 style={styles.city}>
        {weather.name}
      </h2>
     
     <p style={styles.icon}>
  {getWeatherIcon()}
</p>

      <p style={styles.temp}>
        {Math.round(weather.main.temp)}°C
      </p>

      <p style={styles.condition}>
        {weather.weather[0].main}
      </p>

      <div style={styles.extraInfo}>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} km/h</p>
      </div>

    </div>
  );
};

export default WeatherCard;


// Inline styles object
const styles = {

  card: {
  width: "350px",
  margin: "40px auto",
  padding: "30px",
  borderRadius: "24px",
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(12px)",
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
  animation: "fadeIn 0.5s ease",
},



  city: {
  fontSize: "32px",
  fontWeight: "bold",
  padding:"10px",
  marginBottom: "20px",
},

   icon: {
  fontSize: "80px",
  padding:"10px",
  margin: "20px 0",
},

 temp: {
  fontSize: "60px",
  fontWeight: "bold",
  padding:"10px",
  margin: "15px 0",
},

  condition: {
    fontSize: "40px",
    marginBottom: "20px",
  },

  extraInfo: {
    fontSize: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
};