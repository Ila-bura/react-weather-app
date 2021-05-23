import React from "react";
import "./Weather.css";


export default function Weather() {
  

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
        
      
     
      <h1>Vienna</h1>
      <ul>
        <li>Wednesady 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
      <div className="clearfix">
          <img 
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" 
          alt="Mostly cloudy"
          className="float-left" 
          />
     <div className="float-left">
          <span className="temperature">6</span>
          <span className="unit">°C</span>
          </div>
          </div>
             </div>
        <div className="col-6">
          <ul>
        <li>Precipitation: 15%</li>
        <li>Humidity: 72%</li>
         <li>Wind: 13km/h</li>
      </ul>
        </div>
      </div>

      

      <p className="footer">
        <a
          href="https://github.com/Ila-bura/react-weather-app" 
          className="github me-1" target="_blank"
        >
          Open-source code {""}
        </a>
        by {""}
        <a
          href="https://www.linkedin.com/in/ilaria-burani-89216132/"
          className="signature ms-1" target="_blank"
        >
          Ilaria Burani
        </a>
      </p>
    </div>
  );
}
