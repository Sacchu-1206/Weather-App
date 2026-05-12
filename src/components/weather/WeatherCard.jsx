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
  width: "360px",
  margin: "40px auto",
  padding: "35px",
  borderRadius: "28px",
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.2)",
  textAlign: "center",
  boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
  animation: "fadeIn 0.5s ease",
  transition: "0.3s ease",
},

 city: {
  fontSize: "38px",
  fontWeight: "700",
  marginBottom: "15px",
  letterSpacing: "1px",
},
   icon: {
  fontSize: "80px",
  padding:"10px",
  margin: "20px 0",
},

 temp: {
  fontSize: "72px",
  fontWeight: "bold",
   padding:"10px",
  margin: "15px 0",
},

 condition: {
  fontSize: "26px",
  marginBottom: "25px",
  fontWeight: "500",
},

  extraInfo: {
    fontSize: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
};