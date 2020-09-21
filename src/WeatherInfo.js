import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

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

  return (
    <div className="currentTemp">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="currentTemp">
        <WeatherIcon icon={props.data.icon} />
        {unit === "celsius"
          ? Math.round(props.data.temperature)
          : Math.round(fahrenheit())}
        <span>
          <a
            href="/"
            onClick={showCelsius}
            style={
              unit === "celsius"
                ? {
                    color: "black",
                  }
                : {}
            }
          >
            °C
          </a>{" "}
          |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
            style={
              unit === "fahrenheit"
                ? {
                    color: "black",
                  }
                : {}
            }
          >
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
}
