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
  gap: "20px",
  flexWrap: "wrap",
  marginTop: "35px",
},

 card: {
  width: "150px",
  padding: "20px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.15)",
  textAlign: "center",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  transition: "0.3s ease",
},
  temp: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};