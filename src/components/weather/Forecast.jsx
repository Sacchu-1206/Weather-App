const Forecast = ({ forecast }) => {

  if (!forecast) return null;

  return (

  <div style={styles.container}>

  {
    forecast.list
      .filter((item) =>
        item.dt_txt.includes("12:00:00")
      )
      .map((item, index) => (

        <div key={index} style={styles.card}>

          <h3>
            {new Date(item.dt_txt).toLocaleDateString()}
          </h3>

          <p style={styles.temp}>
            {Math.round(item.main.temp)}°C
          </p>

          <p>
            {item.weather[0].main}
          </p>

        </div>
      ))
  }

</div>
      )}

export default Forecast;


const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  card: {
    width: "140px",
    padding: "15px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.12)",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },

  temp: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};