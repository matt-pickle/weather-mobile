import React from 'react';
import {Text, View, Image} from "react-native";
import styles from '../styles/styles';

function HourDisplay(props) {  

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

  //Checks for night time
  const timeOfDay = props.dt;
  if (timeOfDay < props.sunrise ||
      timeOfDay > props.sunset && timeOfDay < props.tomorrowSunrise ||
      timeOfDay > props.tomorrowSunset && timeOfDay < props.dayAfterTomorrowSunrise ||
      timeOfDay > props.dayAfterTomorrowSunset) {
    conditionArr.push("Night");
  }

  //Selects icon based on weather conditions (must be static)
  let icon = require("../images/partly-cloudy.png");
  conditionArr.includes("Snow") ? icon = require("../images/snow.png")
  : conditionArr.some(el => el === "Thunderstorm" || el === "Squall" || el === "Tornado") ? icon = require("../images/thunderstorm.png")
  : conditionArr.some(el => el === "Drizzle" || el === "Rain") ? icon = require("../images/rain.png")
  : conditionArr.some(el => el === 804 ||
                      el === "Fog" ||
                      el === "Smoke" ||
                      el === "Mist" ||
                      el === "Haze" ||
                      el === "Dust" ||
                      el === "Sand" ||
                      el === "Ash") ?
                      icon = require("../images/cloudy.png")
  : conditionArr.includes("Night") ? icon = require("../images/night.png")
  : conditionArr.some(el => el === 802 || el === 803) ? icon = require("../images/partly-cloudy.png")
  : conditionArr.some(el => el === "Clear" || el === 801) ? icon = require("../images/sunny.png")
  : null;

  return (
    <View style={styles.hourDisplay}>
      <Text style={styles.hourDisplayHeader}>{hourConverted}{ampm}</Text>
      <Text style={styles.hourDisplayHeader}>{weekDay}</Text>
      <Image source={icon} style={styles.hourIcon} />
      <Text style={styles.hourDescription}>{description}</Text>
      <Text style={styles.hourTemp}>{Math.round(props.temp)}
        <Text style={styles.degree}>&deg;</Text>
      </Text>
      <Text style={styles.hourSmallText}>Feels Like {Math.round(props.feels_like)}
        <Text style={styles.degree}>&deg;</Text>
      </Text>
      <Text style={styles.hourSmallText}>Rain Chance: {Math.round(props.pop * 100)}%</Text>
      <Text style={styles.hourSmallText}>Humidity: {props.humidity}%</Text>
      <Text style={styles.hourSmallText}>Wind Spd: {Math.round(props.wind_speed)}mph</Text>
    </View>
  );
}

export default HourDisplay;
