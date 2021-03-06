import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready: false });
  const [city, setCity] = useState (props.defaultCity);

  function handleResponse(response) {
    
    setWeatherData({
      ready:true,
      coordinates: response.data.coord,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon

  });
  }

function search() {
const apiKey = "f0598073f30911a6c5752b5952f5caea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}


function handleSubmit(event) {
  event.preventDefault();
  search();
  
}


function handleCityChange(event) {
setCity(event.target.value);
}



  if (weatherData.ready)  {
return (
    <div className="Weather">
            <form onSubmit={handleSubmit} className="search_form">
              <input
                type="search"
                className="city-form"
                placeholder="   Type a city here 🗺"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search 🌏"
                className="search_button"
              />
            </form>
            <WeatherInfo data={weatherData}/>

            <WeatherForecast coordinates={weatherData.coordinates}/>
        
    </div>
  );
  
  } else {
    search();
  return "The app is loading.."
  }
  }
