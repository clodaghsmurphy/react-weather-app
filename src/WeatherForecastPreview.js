import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  let timestamp = new Date(props.data.dt * 1000);
  let hours = timestamp.getHours();
  let temperature = Math.round(props.data.main.temp);
  console.log(timestamp);

  return (
    <div className="d-block col">
      <div>{hours}:00</div>
      <div>
        {" "}
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <div>{temperature}°C</div>
    </div>
  );
}
