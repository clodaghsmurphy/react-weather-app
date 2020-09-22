import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

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
    <div className="WeatherInfo col">
      <div className="header col-12">
        <div className="col  float-right">
          <div className="float-right ">
            <h1 className="city">{props.data.city}</h1>
            <span className=" col float-right">
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
      </div>

      <div className="temperature col-12 d-inline-block">
        <WeatherIcon icon={props.data.icon} />
        {unit === "celsius"
          ? Math.round(props.data.temperature)
          : Math.round(fahrenheit())}

        <span className="unitChange">
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
        <div className="row justify-content-center">
          <div className="description d-inline-block ">
            {props.data.description}
            <div className="row justify-content-center">
              <span className="humidity-wind ">
                <strong> Humidity</strong>
                <br></br>
                {Math.round(props.data.humidity)} %
              </span>
              <span className=" humidity-wind ">
                <strong> Wind Speed</strong>
                <br></br>
                {Math.round(props.data.windSpeed)}/kph
              </span>
            </div>
          </div>
        </div>
        <div className="humidity-wind "></div>
      </div>
    </div>
  );
}
