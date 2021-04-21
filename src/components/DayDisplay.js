import React from 'react';
import {Text, View, Image} from "react-native";
import styles from '../styles/styles';

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
    <View style={styles.hourDisplay}>
      <Text style={styles.hourDisplayHeader}>{weekDay}</Text>
      <Text style={styles.hourDisplayHeader}>{month}-{date}</Text>
      <Image source={icon} style={styles.hourIcon} />
      <Text style={styles.hourDescription}>{description}</Text>
      <Text style={styles.dayTemp}>{props.max}<Text style={styles.degree}>&deg;</Text>
        /{props.min}<Text style={styles.degree}>&deg;</Text>
      </Text>
      <Text style={styles.hourSmallText}>Rain Chance: {Math.round(props.pop * 100)}%</Text>
      <Text style={styles.hourSmallText}>Humidity: {props.humidity}%</Text>
      <Text style={styles.hourSmallText}>Wind Spd: {props.windSpeed}</Text>
    </View>
  );
}

export default DayDisplay;
