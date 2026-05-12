import { useState } from "react";
import { BiColor } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {

  // Input value store 
  const [city, setCity] = useState("");

  // Search button click function
  const handleSubmit = () => {

    // Empty input check
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    // Parent function call
    onSearch(city);

    // Input clear
    setCity("");
  };

  return (
    <div style={styles.container}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />

      <button
        onClick={handleSubmit}
        style={styles.button}
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;


// Inline styles
const styles = {

 container: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginTop: "40px",
  flexWrap: "wrap",
},

input: {
  width: "320px",
  padding: "15px 20px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.2)",
  outline: "none",
  fontSize: "17px",
  background: "rgba(0,0,0,0.25)",
  color: "white",
  backdropFilter: "blur(10px)",
},
button: {
  padding: "14px 26px",
  border: "none",
  borderRadius: "14px",
  background: "#ff4b2b",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "0.3s ease",
},
};