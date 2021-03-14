import React, {useState, useEffect} from 'react';
import {Text, View, Image} from "react-native";
import styles from '../styles/styles';

function Current(props) { 
  const current = props.weatherObj.current;
  const [description, setDescription] = useState(""); 
  
  useEffect(() => {
    //Creates weather description string
    current.weather.forEach((item, index) => {
      if (index === 0) {
        setDescription(item.description);
      } else {
        setDescription(description + ", " + item.description);
      }
    });
  }, []);

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
  
  return (
    <View style={styles.currentContainer}>
      <Image source={icon} style={styles.currentIcon} />
      <Text className="current-temp">{Math.round(current.temp)}<Text className="degree">&deg;</Text></Text>
      <Text className="current-feels-like">Feels Like {Math.round(current.feels_like)}&deg;</Text>
      <Text className="current-description">{description}</Text>
      <Text className="current-humidity">Humidity: {current.humidity}%</Text>
      <Text className="current-wind-speed">Wind Speed: {Math.round(current.wind_speed)}mph</Text>
    </View>
  );
}

export default Current;
