import React, { useState } from "react";
import axios from "axios";
import "./forecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast mx-auto ">
        <div className="row hourlyForecast ">
          <WeatherForecastPreview data={forecast.list[0]} className="col" />
          <WeatherForecastPreview data={forecast.list[1]} className="col" />
          <WeatherForecastPreview data={forecast.list[2]} className="col" />
          <WeatherForecastPreview data={forecast.list[3]} className="col" />
          <WeatherForecastPreview data={forecast.list[4]} className="col" />
        </div>
      </div>
    );
  } else {
    const apiKey = `c90c4a455e1973704f6aa4951d1a6b90`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
