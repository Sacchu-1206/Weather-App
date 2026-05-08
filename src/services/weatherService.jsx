import axios from "axios";

// Base URL (API ka main link)
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function banaya weather fetch karne ke liye
export const getWeatherByCity = async (city) => {
  try {
      // console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error fetching weather:", error);
    throw error;
  }
};