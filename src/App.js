import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [weather, setWeather] = useState(null);
  const [dark, setDark] = useState(false);

  return (
  <div
    className={`min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-700 ${
      dark
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
        : weather?.weather[0].main === "Clear"
        ? "bg-gradient-to-br from-yellow-300 via-orange-300 to-blue-400"
        : weather?.weather[0].main === "Rain"
        ? "bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 text-white"
        : weather?.weather[0].main === "Clouds"
        ? "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500"
        : weather?.weather[0].main === "Snow"
        ? "bg-gradient-to-br from-blue-100 via-white to-blue-200"
        : weather?.weather[0].main === "Thunderstorm"
        ? "bg-gradient-to-br from-gray-800 via-purple-900 to-black text-white"
        : "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500"
    }`}
  >
    {/* Dark Mode Button */}
    <button
      onClick={() => setDark((prev) => !prev)}
      className="absolute top-4 right-4 bg-black/70 text-white px-4 py-1 rounded-lg hover:bg-black transition"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>

    {/* Main Container */}
    <div className="w-full max-w-4xl text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
        🌍 Origo
      </h1>

      {/* Search Bar */}
      <SearchBar setWeather={setWeather} dark={dark} />

      {/* Weather Section (placeholder for now) */}
      {weather && (
        <div className="mt-6 text-white">
          {/* WeatherCard will come here */}
        </div>
      )}

    </div>
  </div>
);
}

export default App;