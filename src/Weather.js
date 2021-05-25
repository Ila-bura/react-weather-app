import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ ready: false });

  function handleResponse(response) {
    
    setWeatherData({
      ready:true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"

  });
  }

  if (weatherData.ready)  {
return (
    <div className="Weather">
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
        
      
     <div className="row">
        <div className="col-2">
      <h1>{weatherData.city}</h1>
      </div>
<div className="col-10">
<img 
          src={weatherData.iconUrl} 
          alt={weatherData.description}
           
          />


</div>
</div>



      <ul>
        <li>
          <FormattedDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>



      <div className="row">
        <div className="col-6">
      <div >
          
           
          

<span className="temp_unit">
            <strong>
              <span className="temperature">{Math.round(weatherData.temperature)} </span>
            </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </span>

          </div>
             </div>
        <div className="col-6">
          <ul>
       
        <li>Humidity: {Math.round(weatherData.humidity)}%</li>
         <li>Wind: {Math.round(weatherData.wind)}km/h</li>
      </ul>
        </div>
      </div>

      

      <p className="footer">
        <a
          href="https://github.com/Ila-bura/react-weather-app" 
          className="github me-1" target="_blank" rel="noreferrer"
        >
          Open-source code {""}
        </a>
        by {""}
        <a
          href="https://www.linkedin.com/in/ilaria-burani-89216132/"
          className="signature ms-1" target="_blank" rel="noreferrer"
        >
          Ilaria Burani
        </a>
      </p>
    </div>
  );
  
  } else {
  const apiKey = "f0598073f30911a6c5752b5952f5caea";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading.."
  }
  }
