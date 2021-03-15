import React from 'react';

function DayDisplay(props) {  

  const now = new Date(props.dt * 1000);
  const day = now.getDay();
  const weekDay = day === 0 ? "Sunday"
                : day === 1 ? "Monday"
                : day === 2 ? "Tuesday"
                : day === 3 ? "Wednesday"
                : day === 4 ? "Thursday"
                : day === 5 ? "Friday"
                : "Saturday";
  const month = now.getMonth() + 1;
  const date = now.getDate();
  
  //Creates weather description string
  let description = "";
  props.weather.forEach((item, index) => {
    if (index === 0) {
      description = item.description;
    } else {
      description = description + ", " + item.description;
    }
  });

  //Creates array of weather conditions
  let conditionArr = [];
  props.weather.forEach(item => {
    conditionArr.push(item.main, item.id);
  });

  //Selects icon based on weather conditions (must be static url)
  let icon = require("../images/partly-cloudy.png");
  conditionArr.includes("Snow") ? icon = require("../images/snow.png")
  : conditionArr.some(el => el === "Thunderstorm" || el === "Squall" || el === "Tornado") ? icon = require("../images/thunderstorm.png")
  : conditionArr.some(el => el === "Drizzle" || el === "Rain") ? icon = require("../images/rain.png")
  : conditionArr.some(el => el === 802 || el === 803) ? icon = require("../images/partly-cloudy.png")
  : conditionArr.some(el => el === 804 ||
                            el === "Fog" ||
                            el === "Smoke" ||
                            el === "Mist" ||
                            el === "Haze" ||
                            el === "Dust" ||
                            el === "Sand" ||
                            el === "Ash") ?
                            icon = require("../images/cloudy.png")
  : conditionArr.some(el => el === "Clear" || el === 801) ? icon = require("../images/sunny.png")
  : null;

  return (
    <div className="day-display-container">
      <h2 className="daily-day">{weekDay}</h2>
      <h2 className="daily-date">{month}-{date}</h2>
      <img src={icon} alt="weather icon" className="daily-icon" />
      <p className="daily-description">{description}</p>
      <p className="daily-temp">{Math.round(props.max)}<span className="degree">&deg;</span>
        /{Math.round(props.min)}<span className="degree">&deg;</span></p>
      <p className="daily-rain-chance">Rain Chance: {Math.round(props.pop * 100)}%</p>
      <p className="daily-humidity">Humidity: {props.humidity}%</p>
      <p className="daily-wind-speed">Wind Spd: {Math.round(props.wind_speed)}mph</p>
    </div>
  );
}

export default DayDisplay;
