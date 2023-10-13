import React from "react";
import "./App.css";

export default function DailyForecast() {
  return (
      <Weather defaultCity="Kharkiv" />
    <footer>
      <div>
        The project was coded by{" "}
        <a
          href="www.linkedin.com/in/chimenemakah"
          target="_blank"
          rel="noreferrer"
        >
          Chimenem Esther Akah
        </a>
        , is{" "}
        <a
          href="https://github.com/chimenemakah/react-final-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        "and"{" "}
        <a href="" target="blank" rel="noreferrer">
          Hosted on Netlify
        </a>
      </div>
    </footer>
  );
}
