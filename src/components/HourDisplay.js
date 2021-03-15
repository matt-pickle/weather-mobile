import React, {useState, useEffect} from 'react';
import {Text, View, Image} from "react-native";

function HourDisplay(props) {  
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const now = new Date(props.dt * 1000);
  const day = now.getDay();
  const weekDay = day === 0 ? "Sunday"
                : day === 1 ? "Monday"
                : day === 2 ? "Tuesday"
                : day === 3 ? "Wednesday"
                : day === 4 ? "Thursday"
                : day === 5 ? "Friday"
                : "Saturday";
  const hour = now.getHours();
  const hourConverted = hour > 12 ? hour - 12
                      : hour === 0 ? 12
                      : hour;
  const ampm = now.getHours() < 12 ? "am" : "pm";
  
  useEffect(() => {
    //Creates weather description string
    props.weather.forEach((item, index) => {
      if (index === 0) {
        setDescription(item.description);
      } else {
        setDescription(description + ", " + item.description);
      }
    });
    //Creates array of weather conditions
    let conditionArr = [];
    props.weather.forEach(item => {
      conditionArr.push(item.main, item.id);
    });
    //Checks for night time
    const now = props.dt;
    if (now < props.sunrise ||
        now > props.sunset && now < props.tomorrowSunrise ||
        now > props.tomorrowSunset && now < props.dayAfterTomorrowSunrise) {
      conditionArr.push("Night");
    }
    //Selects icon based on weather conditions
    conditionArr.includes("Snow") ? setIcon(require("../images/snow.png"))
    : conditionArr.some(el => el === "Thunderstorm" || el === "Squall" || el === "Tornado") ? setIcon(require("../images/thunderstorm.png"))
    : conditionArr.some(el => el === "Drizzle" || el === "Rain") ? setIcon(require("../images/rain.png"))
    : conditionArr.some(el => el === 804 ||
                        el === "Fog" ||
                        el === "Smoke" ||
                        el === "Mist" ||
                        el === "Haze" ||
                        el === "Dust" ||
                        el === "Sand" ||
                        el === "Ash") ?
                        setIcon(require("../images/cloudy.png"))
    : conditionArr.includes("Night") ? setIcon(require("../images/night.png"))
    : conditionArr.some(el => el === 802 || el === 803) ? setIcon(require("../images/partly-cloudy.png"))
    : conditionArr.some(el => el === "Clear" || el === 801) ? setIcon(require("../images/sunny.png"))
    : setIcon("");
  }, []);

  return (
    <View className="hour-display-container">
      <Text className="hourly-hour">{hourConverted}{ampm}</Text>
      <Text className="hourly-day">{weekDay}</Text>
      <Image sourc={icon} className="hourly-icon" />
      <Text className="hourly-description">{description}</Text>
      <Text className="hourly-temp">{Math.round(props.temp)}
        <Text className="degree">&deg;</Text>
      </Text>
      <Text className="hourly-feels-like">Feels Like {Math.round(props.feels_like)}
        <Text className="degree">&deg;</Text>
      </Text>
      <Text className="hourly-rain-chance">Rain Chance: {Math.round(props.pop * 100)}%</Text>
      <Text className="hourly-humidity">Humidity: {props.humidity}%</Text>
      <Text className="hourly-wind-speed">Wind Spd: {Math.round(props.wind_speed)}mph</Text>
    </View>
  );
}

export default HourDisplay;
