import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./forecast.css";

export default function WeatherForecastPreview(props) {
  let timestamp = new Date(props.data.dt * 1000);
  let hours = timestamp.getHours();
  let temperature = Math.round(props.data.main.temp);

  return (
    <div className="d-block mx-3 col forecast">
      <div>{hours}:00</div>
      <div className="mt-3">
        {" "}
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <div>{temperature}°C</div>
    </div>
  );
}
