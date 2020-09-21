import React from "react";
import weatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    console.log(props.data);
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    console.log(hours);

    return `${hours}:00`;
  }

  return <div>{hours}</div>;
}
