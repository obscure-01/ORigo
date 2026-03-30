import { useState } from "react";
import { getWeather, getForecast } from "../services/weatherApi";
import Forecast from "./Forecast";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";

function SearchBar({ dark }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [forecast, setForecast] = useState([]);

  // 🔍 SEARCH FUNCTION
  const handleSearch = async () => {
    setLoading(true);
    setError("");

    const data = await getWeather(city);

    if (!data || data.cod !== 200) {
      setError("City not found ❌");
      setWeather(null);
      setForecast([]);
    } else {
      setWeather(data);

      const forecastData = await getForecast(city);
      if (forecastData && forecastData.list) {
        const today = new Date().getDate();
        const uniqueDays = [];
        const dailyData = forecastData.list.filter(item => {
          const date = new Date(item.dt_txt);
          const day = date.getDate();
          if (day !== today && !uniqueDays.includes(day)) {
            uniqueDays.push(day);
            return true;
          }
          return false;
});

setForecast(dailyData.slice(0, 5));
      }
    }

    if (!history.includes(city)) {
      setHistory([city, ...history.slice(0, 4)]);
    }

    setLoading(false);
  };

  // 📍 LOCATION FUNCTION (FIXED)
  const handleLocation = () => {
  if (!navigator.geolocation) {
    setError("Geolocation not supported ❌");
    return;
  }

  setLoading(true);
  setError("");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc3a905338c5eba132f90531cb0bcb2c&units=metric`
        );

        const data = await res.json();
        

        if (data.cod !== 200) {
          setError("Location not found ❌");
          setWeather(null);
          setForecast([]);
        } else {
          setWeather(data);
          setCity(data.name); // update input
          if (!history.includes(data.name)) {
            setHistory([data.name, ...history.slice(0, 4)]);
          }

          const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=bc3a905338c5eba132f90531cb0bcb2c&units=metric`
          );
          const forecastData = await forecastRes.json();

          if (forecastData && forecastData.list) {
            const today = new Date().getDate();
            const uniqueDays = [];

            const dailyData = forecastData.list.filter(item => {
              const date = new Date(item.dt_txt);
              const day = date.getDate();

              if (day !== today && !uniqueDays.includes(day)) {
                uniqueDays.push(day);
                return true;
              }
              return false;
            });

            setForecast(dailyData.slice(0, 5));
          }
        }
      } catch (err) {
        setError("Error fetching location ❌");
      }

      setLoading(false);
    },
    (error) => {
      setLoading(false);

      if (error.code === 1) {
        setError("Permission denied ❌ Enable location");
      } else {
        setError("Unable to get location ❌");
      }
    }
  );
};

  return (
    <div className="flex flex-col items-center gap-4">

      {/* Loading */}
      {loading && (
  <div className="flex flex-col items-center gap-2 animate-fadeIn">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-sm text-gray-500 dark:text-gray-300 animate-pulse">
      Fetching weather...
    </p>
  </div>
)}

      {/* Search Box */}
      <div className="backdrop-blur-md bg-white/20 border border-white/30 p-4 rounded-2xl shadow-lg flex gap-2">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={
             dark
               ? "bg-gray-700 text-white placeholder-gray-400 border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition-all"
               : "bg-white text-black border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition-all"
}
        />

        <button
          onClick={handleSearch}
          className={
            dark
              ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
              : "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:scale-95 transition-all duration-200"
          }
        >
          Search
        </button>
      </div>

      {/* History */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => setCity(item)}
            className={
              dark
                ? "bg-gray-700 text-white px-3 py-1 rounded-full shadow text-sm hover:scale-105 active:scale-95 transition-all"
                : "bg-white px-3 py-1 rounded-full shadow text-sm hover:scale-105 active:scale-95 transition-all"
}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Location Button */}
      <button
      onClick={handleLocation}
      disabled={loading}
      className={`px-4 py-2 rounded-md text-white ${
        loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
        }`}
>
      {loading ? "Getting location..." : "📍 Use my location"}
</button>

      {/* Error */}
      {error && (
        <p className="text-red-500 font-semibold">{error}</p>
      )}

      {/* Weather Card */}
{weather && (
  <div className="animate-fadeIn">
    
    <div
      className="
      backdrop-blur-md bg-white/20 border border-white/30
      p-6 rounded-2xl shadow-xl text-center w-72
      text-black dark:text-white
      transition-all duration-500
      shadow-[0_0_25px_rgba(255,255,255,0.2)]
      ">
      
    
      <h2 className="text-2xl font-bold">
        Today • {weather.name}
      </h2>

        <div className="text-7xl flex justify-center drop-shadow-lg">
        {weather.weather[0].main === "Clear" && <WiDaySunny />}
        {weather.weather[0].main === "Clouds" && <WiCloud />}
        {weather.weather[0].main === "Rain" && <WiRain />}
        {weather.weather[0].main === "Snow" && <WiSnow />}
        {weather.weather[0].main === "Thunderstorm" && <WiThunderstorm />}
      </div>

      <p className="text-4xl font-semibold my-2">
        {weather.main.temp}°C
      </p>

      <p
        className={
          dark
            ? "capitalize text-gray-300 mb-4"
            : "capitalize text-gray-600 mb-4"
        }
      >
        {weather.weather[0].description}
      </p>

      <div
        className={
          dark
            ? "grid grid-cols-2 gap-4 text-sm text-gray-300"
            : "grid grid-cols-2 gap-4 text-sm text-gray-700"
        }
      >
        <p>🌡 Feels: {weather.main.feels_like}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>🌬 Wind: {weather.wind.speed} m/s</p>
        <p>📍 {weather.sys.country}</p>
      </div>
    </div>

  </div>
)}

      {/* Forecast */}
      {forecast.length > 0 && (
        <Forecast forecast={forecast} />
      )}

    </div>
  );
}

export default SearchBar;