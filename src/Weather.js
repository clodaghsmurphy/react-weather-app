import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function Search() {
    let apiKey = "c90c4a455e1973704f6aa4951d1a6b90";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    Search();
    return null;
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="mt-3 container background p-4">
        <form onSubmit={handleSubmit} className="form-group ">
          <input
            type="search"
            autoComplete="off"
            autoFocus="off"
            onChange={changeCity}
            placeholder="Search city..."
            className="form-control col-9 d-inline mt-4"
          />

          <button
            type="submit"
            value="Search"
            className="btn text-uppercase btn-info"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        <WeatherInfo city={city} data={weatherData} />
        <Forecast city={city} />
      </div>
    );
  } else {
    Search();
    return (
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
}
