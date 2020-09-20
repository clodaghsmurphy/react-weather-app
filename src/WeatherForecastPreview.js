import React from "react";
import weatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    console.log(date);

    return null;
  }

  return (
    <div>
      {hours}
      <weatherIcon icon={props.data.weather[0].icon} />;{props.data.main.temp}
    </div>
  );
}
