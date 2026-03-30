import axios from "axios";

const API_KEY = "bc3a905338c5eba132f90531cb0bcb2c";

export const getWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

export const getForecast = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};