const Loader = () => {

  return (

    <div style={styles.container}>

      <div style={styles.spinner}></div>

    </div>
  );
};

export default Loader;


const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },

  spinner: {
    width: "55px",
    height: "55px",
    border: "6px solid rgba(255,255,255,0.3)",
    borderTop: "6px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};