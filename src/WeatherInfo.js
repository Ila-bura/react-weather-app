import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

<div className="row">
        <div className="col-1">
      <img 
          src={props.data.iconUrl} 
          alt={props.data.description}
           
          />
      </div>

<div className="col-11">
  <h1>{props.data.city}</h1>



</div>
</div>



      <ul>
        <li>
          <FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>



      <div className="row">
        <div className="col-6">
      <div >
          
           
          

<span className="temp_unit">
            <strong>
              <span className="temperature">{Math.round(props.data.temperature)} </span>
            </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </span>

          </div>
             </div>
        <div className="col-6">
          <ul>
       
        <li>Humidity: {Math.round(props.data.humidity)}%</li>
         <li>Wind: {Math.round(props.data.wind)}km/h</li>
      </ul>
        </div>
      </div>
      </div>
   





    )
} 