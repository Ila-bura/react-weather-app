import React from "react";
import "./Weather.css";
import axios from 'axios';

export default function Weather() {
  let weatherData = {
    city: "Dublin",
    date: "Sunday 9 May",
    description: "Clear Sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    humidity: 80,
    wind: 10,
    temperature: 12
  };

  return (
    <div className="Weather">
      <div className="date_form">
        <div className="row">
          <div className="col-6">
            <div className="date">
              <h1>
                <span img="emoji" description="aria-label"></span>
                {"📆 "}
                {weatherData.date}
              </h1>
            </div>
          </div>
          <div className="col-6">
            <form className="search_form">
              <input
                type="search"
                className="city-form"
                placeholder="   Type a city here 🗺"
                autoFocus="on"
                autoComplete="off"
              />
              <input
                type="submit"
                value="Search 🌏"
                className="search_button"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="city_name">
        <div className="row">
          <div className="col-md-auto">
            <h2>
              {weatherData.city}
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="forecast-icon"
              />
            </h2>
          </div>
        </div>
      </div>
      <section className="current_weather">
        <div>
          <span className="current_weather_icon">
            {weatherData.description}
          </span>
          <span className="temp_unit">
            <strong>
              <span className="temperature">{weatherData.temperature}</span>
            </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </span>
        </div>
        <span className="humidity_wind">
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </span>
      </section>

      <p className="footer">
        <a
          href="https://github.com/Ila-bura/ila_shecodes_project"
          className="github me-1"
        >
          Open-source code {""}
        </a>
        by {""}
        <a
          href="https://www.linkedin.com/in/ilaria-burani-89216132/"
          className="signature ms-1"
        >
          Ilaria Burani
        </a>
      </p>
    </div>
  );
}
