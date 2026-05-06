const WeatherCard = ({ weather }) => {

  // Agar weather data nahi hai to kuch show mat karo
  if (!weather) return null;

  return (
    <div style={styles.card}>

      <h2 style={styles.city}>
        {weather.name}
      </h2>

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
    marginBottom: "10px",
  },

  temp: {
    fontSize: "50px",
    fontWeight: "bold",
    margin: "10px 0",
  },

  condition: {
    fontSize: "20px",
    marginBottom: "20px",
  },

  extraInfo: {
    fontSize: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
};