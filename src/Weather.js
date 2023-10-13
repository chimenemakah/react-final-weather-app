import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    // console.log(city);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handlSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter e city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
