import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

<div className="row">
        <div className="col-2">
          <div className="clearfix">
            <div className="float-left">
          <WeatherIcon code={props.data.icon} />
          </div>
      </div>
<div className="float-left">
<div className="col-10">
  
  <h1>{props.data.city}</h1>
  </div>
</div>
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