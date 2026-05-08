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
    width: "300px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },



  city: {
    fontSize: "28px",
    fontWeight: "bold",
    padding:"10px",
    marginBottom: "20px",
  },

    icon: {
  fontSize: "70px",
  marginBottom: "20px",
},

  temp: {
    fontSize: "48px",
    fontWeight: "bold",
    padding:"20px",
    margin: "10px 0",
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