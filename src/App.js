import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Paris" />;
      </div>
      <footer>
        <a
          href="https://github.com/clodaghsmurphy/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/clodagh-murphy-4a96a715a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Clodagh Muprhy{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
