import React, { useState } from "react";

const WeatherInfo = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">Weather Information Finder</h1>
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={fetchWeather}
        >
          Get Weather
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weather && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
            <p className="text-lg">Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
