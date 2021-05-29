import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">

<div className="row">
        <div className="col-1">  
          <WeatherIcon code={props.data.icon} />       
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
<span className="temp_unit">
  <WeatherTemperature celsius={props.data.temperature} />
        </span>     
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