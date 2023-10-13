import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Weather from "./Weather";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="weather-container">
        <Weather defaultCity="Abuja" />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
reportWebVitals();
