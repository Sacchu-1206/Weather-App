import axios from "axios";

// Base URL (API ka main link)
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const FORECAST_URL ="https://api.openweathermap.org/data/2.5/forecast";

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

export const getWeatherByCoords = async (lat, lon) => {

  try {

    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    });

    return response.data;

  } catch (error) {

    console.log("Location weather error:", error);
    throw error;
  }
};

export const getForecastByCity = async (city) => {

  try {

    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
        units: "metric",
      },
    });

    return response.data;

  } catch (error) {

    console.log("Forecast error:", error);
    throw error;
  }
};