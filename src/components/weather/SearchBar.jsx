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
  padding: "14px 18px",
  borderRadius: "14px",
  border: "none",
  outline: "none",
  fontSize: "17px",
  background: "#2f2f2f",
  color: "white",
},
button: {
  padding: "14px 24px",
  border: "none",
  borderRadius: "14px",
  background: "red",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
},
};