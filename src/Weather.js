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
        
      
     <div className="row">
        <div className="col-2">
      <h1>Vienna</h1>
      </div>
<div className="col-10">
<img 
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" 
          alt="Mostly cloudy"
           
          />


</div>
</div>



      <ul>
        <li>Wednesady 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>



      <div className="row">
        <div className="col-6">
      <div >
          
           
          

<span className="temp_unit">
            <strong>
              <span className="temperature">12 </span>
            </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </span>

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
