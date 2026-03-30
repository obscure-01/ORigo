function Forecast({ forecast, dark }) {
  return (
    <div className="mt-6 w-full">

      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-4 tracking-wide">
        5-Day Forecast
      </h2>

      {/* Cards container */}
      <div className="flex gap-4 justify-center flex-wrap">

        {forecast.map((item, index) => (
          <div
            key={index}
            className="
            backdrop-blur-md bg-white/20 border border-white/30
            p-4 rounded-xl shadow-md text-center
            text-black dark:text-white
            min-w-[110px]
            transform hover:scale-110 hover:shadow-xl
            transition-all duration-300 cursor-pointer
            "
          >

            {/* Day */}
            <p className="font-medium">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            {/* Icon */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="weather"
              className="mx-auto"
            />

            {/* Temp */}
            <p className="font-semibold">
              {Math.round(item.main.temp)}°C
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Forecast;