import { useState } from "react";

const SearchBar = ({ onSearch }) => {

  // Input value store karega
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
    gap: "10px",
    marginTop: "40px",
  },

  input: {
    width: "250px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "16px",
  },

  button: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#ffffff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};