import React from 'react';
import {Text, View, Image} from "react-native";
import styles from '../styles/styles';

function Current(props) { 
  const current = props.weatherObj.current;
  
  //Creates weather description string
  let description = "";
  current.weather.forEach((item, index) => {
    if (index === 0) {
      description = item.description;
    } else {
      description = description + ", " + item.description;
    }
  });

  //Set weather icon url based on currentWeather (must be static url)
  let icon = null;
  switch(props.currentWeather) {
    case "cloudy":
      icon = require("../images/cloudy.png");
      break;
    case "night":
      icon = require("../images/night.png");
      break;
    case "partly-cloudy":
      icon = require("../images/partly-cloudy.png");
      break;
    case "rain":
      icon = require("../images/rain.png");
      break;
    case "snow":
      icon = require("../images/snow.png");
      break;
    case "sunny":
      icon = require("../images/sunny.png");
      break;
    case "thunderstorm":
      icon = require("../images/thunderstorm.png");
      break;
  }

  //Check for triple digit temp
  const tempStyle = current.temp.length > 2 ?
    styles.currentTempTripleDigits :
    styles.currentTemp;

  //Set sunrise and sunset times
  const sunrise = new Date(
    (props.weatherObj.current.sunrise * 1000) + props.weatherObj.timezone_offset
  );
  const sunriseHour = sunrise.getHours();
  const sunriseMinutes = sunrise.getMinutes();
  const sunset = new Date(
    (current.sunset * 1000) + props.weatherObj.timezone_offset
  );
  const sunsetHour = sunset.getHours() -12;
  const sunsetMinutes = sunset.getMinutes();
  
  return (
    <View style={styles.currentContainer}>
      <View style={styles.currentColumnLeft}>
        <Image source={icon} style={styles.currentIcon} />
        <Text style={styles.currentDescription}>{description}</Text>
      </View>
      <View style={styles.currentColumnRight}>
        <Text style={tempStyle}>{Math.round(current.temp)}
            <Text style={styles.degree}>&deg;</Text>
        </Text>
        <Text style={styles.currentSmallText}>Feels Like {Math.round(current.feels_like)}&deg;</Text>
        <Text style={styles.currentSmallText}>
          <Text style={styles.currentSmallText}>H/L: </Text>
          <Text style={styles.dayTemp}>{Math.round(props.weatherObj.daily[0].temp.max)}<Text style={styles.degree}>&deg;</Text>
            /{Math.round(props.weatherObj.daily[0].temp.min)}<Text style={styles.degree}>&deg;</Text>
          </Text>
        </Text>
        <Text style={styles.currentSmallText}>Humidity: {current.humidity}%</Text>
        <Text style={styles.currentSmallText}>Wind Spd: {Math.round(current.wind_speed)}mph</Text>
        <Text style={styles.currentSmallText}>Sunrise: {sunriseHour}:{sunriseMinutes}am</Text>
        <Text style={styles.currentSmallText}>Sunset: {sunsetHour}:{sunsetMinutes}pm</Text>
      </View>      
    </View>
  );
}

export default Current;
