import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // fetch weather data whenever city changes
  useEffect(() => {
    if (city === "") return; // skip if no city entered

    const fetchWeather = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d90ef8ddb191868cbd28cc3791c8e1c3`;
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setWeather(null);
          setError("City not found");
        }
      } catch (err) {
        setWeather(null);
        setError("Error fetching data");
      }
    };

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = e.target.elements.cityName.value.trim();
    if (inputVal) {
      setCity(inputVal);
      e.target.reset();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cityName"
          placeholder="Enter city name"
          style={{ padding: "6px", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "6px 12px" }}>
          Search
        </button>
      </form>

      {/* error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* weather info */}
      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
