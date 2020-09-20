import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="currentTemp">
        <h1>{props.city}</h1>
        <div className="currentTemp">
          <WeatherIcon icon={props.data.icon} />
          {Math.round(props.data.temperature)}
          <span>
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
          <span className="justify-content-center">
            <br></br>
            {props.data.description}
          </span>
          <div>
            <h3>
              {Math.round(props.data.humidity)} % |
              {Math.round(props.data.windSpeed)}/kph
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="currenCity">
        <h1>{props.city}</h1>
        <WeatherIcon icon={props.data.icon} />
        {Math.round(fahrenheit())}
        <a href="/" onClick={showCelsius}>
          °C |{" "}
        </a>
        <span>°F</span>
        <span className="justify-content-center">
          <br></br>
          {props.data.description}
        </span>
        <div>
          <h3>
            {Math.round(props.data.humidity)} % |
            {Math.round(props.data.windSpeed)}/kph
          </h3>
        </div>
      </div>
    );
  }
}
