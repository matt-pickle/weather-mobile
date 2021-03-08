import React, {useState} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from "./src/styles/styles.js";
import Input from "./src/components/Input";
import Current from "./src/components/Current";
import Hourly from "./src/components/Hourly";
import Daily from "./src/components/Daily";

export default function App() {
  const [weatherObj, setWeatherObj] = useState();
  const [currentWeather, setCurrentWeather] = useState("partly-cloudy");

  function handleZipSubmit(zip) {
    //Get latitude and longitude coordinates from zip code
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          //Get weather data from coordinates
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
          .then(res => {
            if (res.ok) {
              res.json().then(data => {
                setWeatherObj(data);
                getCurrentWeather(data);
              })
            } else {
              console.error("API Request Failed!");
            }
          })
        })  
      } else {
        console.error("API Request Failed!");
      }
    })
  }

  function getCurrentWeather(data) {
    //Creates array of current weather conditions
    const current = data.current;
    let conditionArr = [];
    current.weather.forEach(item => {
      conditionArr.push(item.main, item.id);
    });
    //Checks for night time
    const now = new Date() / 1000;
    if (now < current.sunrise || now > current.sunset) {
      conditionArr.push("Night");
    }
    //Set currentWeather based on current weather conditions
    conditionArr.includes("Snow") ? setCurrentWeather("snow")
    : conditionArr.some(el => el === "Thunderstorm" ||
                              el === "Squall" ||
                              el === "Tornado") ?
                              setCurrentWeather("thunderstorm")
    : conditionArr.some(el => el === "Drizzle" || el === "Rain") ? setCurrentWeather("rain")
    : conditionArr.some(el => el === 804 ||
                        el === "Fog" ||
                        el === "Smoke" ||
                        el === "Mist" ||
                        el === "Haze" ||
                        el === "Dust" ||
                        el === "Sand" ||
                        el === "Ash") ?
                        setCurrentWeather("cloudy")
    : conditionArr.includes("Night") ? setCurrentWeather("night")
    : conditionArr.some(el => el === 802 || el === 803) ? setCurrentWeather("partly-cloudy")
    : conditionArr.some(el => el === "Clear" || el === 801) ? setCurrentWeather("sunny")
    : setCurrentWeather("");
  }

  //Set background image url based on currentWeather (must be static url)
  let backgroundImage = null;
  switch(currentWeather) {
    case "cloudy":
      backgroundImage = require("./src/images/cloudy.jpg");
      break;
    case "night":
      backgroundImage = require("./src/images/night.jpg");
      break;
    case "partly-cloudy":
      backgroundImage = require("./src/images/partly-cloudy.jpg");
      break;
    case "rain":
      backgroundImage = require("./src/images/rain.jpg");
      break;
    case "snow":
      backgroundImage = require("./src/images/snow.jpg");
      break;
    case "sunny":
      backgroundImage = require("./src/images/sunny.jpg");
      break;
    case "thunderstorm":
      backgroundImage = require("./src/images/thunderstorm.jpg");
      break;
  }

  return (
    <View style={styles.app}>
      <ImageBackground source={backgroundImage}
                       style={{width: "100%", height: "100%"}}
      >
        {/* <Input handleZipSubmit={handleZipSubmit} />
        {
        weatherObj ?
          <div className="output-container">
            <Current weatherObj={weatherObj}
                    currentWeather={currentWeather}
            />
            <Hourly weatherObj={weatherObj} />
            <Daily weatherObj={weatherObj} />
          </div>
        : null
        }       */}
        <Text>Hello world</Text>
      </ImageBackground>
    </View>
  );
}

