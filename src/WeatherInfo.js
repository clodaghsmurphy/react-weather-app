import React, { useState } from "react";

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
        <div className="currentTemp">
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
      <div className="currentTemp">
        <h1>
          {Math.round(fahrenheit())}
          <span>
            <a href="/" onClick={showCelsius}>
              {" "}
              °C{" "}
            </a>{" "}
            | F
          </span>
        </h1>
      </div>
    );
  }
}
