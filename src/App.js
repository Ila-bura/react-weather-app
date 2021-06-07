import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <Weather defaultCity="Vienna"/>

<p className="footer">
  Coded by{""}
<a
          href="https://www.linkedin.com/in/ilaria-burani-89216132/"
          className="signature ms-1" target="_blank" rel="noreferrer"
        >
          Ilaria Burani {""}
        </a>{""}
         - {""}
        <a
          href="https://github.com/Ila-bura/react-weather-app" 
          className="github me-1" target="_blank" rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>{""}{""}
        and
        <a
          href="https://ila-react-weather-app.netlify.app/"
          className="github ms-1" target="_blank" rel="noreferrer"
        >
        hosted on Netlify
        </a>
      </p>


          
        </div>
      </div>
    </div>
  );
}


