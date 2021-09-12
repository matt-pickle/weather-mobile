import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, ImageBackground, StatusBar} from 'react-native';
import AppLoading from "expo-app-loading";
import {useFonts, Ubuntu_700Bold, Ubuntu_400Regular} from "@expo-google-fonts/ubuntu";
import * as Location from "expo-location";
import {AdMobBanner} from "expo-ads-admob";
import styles from "./src/styles/styles.js";
import Current from "./src/components/Current";
import Hourly from "./src/components/Hourly";
import Daily from "./src/components/Daily";

export default function App() {
  const [weatherObj, setWeatherObj] = useState();
  const [currentWeather, setCurrentWeather] = useState("partly-cloudy");
  const [isFetching, setIsFetching] = useState(false);
  const [city, setCity] = useState("");
  const [tempUnits, setTempUnits] = useState("celsius");
  const [speedUnits, setSpeedUnits] = useState("kph");

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  useEffect(() => {
    getLocation()
  }, []);

  async function getLocation() {
    setIsFetching(true);
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({accuracy: 6});
      let region = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
      setCity(region[0].city);
      const cityName = region[0].city || "Unknown";
      setTempUnits(
        region[0].country === "United States" ?
        "fahrenheit" :
        "celsius"
      );
      setSpeedUnits(
        (region[0].country === "United States") ||
        (region[0].country === "United Kingdom") ?
        "mph" :
        "kph"
      );
      fetchWeatherData(cityName, location.coords.latitude, location.coords.longitude);
    }
  }

  function fetchWeatherData(cityName, latitude, longitude) {
    let now = Date.now();
    let body = {
      cityCode: cityName + " " + Math.round(latitude) + "," + Math.round(longitude),
      cityName: cityName,
      latitude: latitude,
      longitude: longitude,
      timestamp: now
    };
    fetch("https://us-central1-simple-weather-d2938.cloudfunctions.net/requestData", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          setWeatherObj(data.weatherObj);
          getCurrentWeather(data.weatherObj);
          setIsFetching(false);
        })
      } else {
        setIsFetching(false);
        console.error("API Request Failed!");
      }
    })
  }

  function convertTempUnits(temp) {
    return (
      tempUnits === "celsius" ?
        Math.round(temp) :
        Math.round((temp * 1.8) + 32)
    );
  }

  function convertSpeedUnits(speed) {
    return (
      speedUnits === "kph" ?
        Math.round(speed) + "kph" :
        Math.round(speed * 1.609344) + "mph"
    );
  }

  function getCurrentWeather(data) {
    //Creates array of current weather conditions
    const current = data.current
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
    : null;
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

  if (!fontsLoaded || isFetching) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.app}>
        <StatusBar></StatusBar>
        <ImageBackground source={backgroundImage}
                         style={{width: "100%", height: "100%"}}
        >
          <AdMobBanner bannerSize="banner"
                       style={styles.topBanner}
                       adUnitID="ca-app-pub-5662395825140930/1861653454"
                       servePersonalizedAds={true}
          />
          <ScrollView>
            {
              weatherObj ?
                <View>
                  <Text style={styles.sectionTitle}>Current Weather in:{"\n"}{city}</Text>
                  <Current weatherObj={weatherObj}
                           currentWeather={currentWeather}
                           convertTempUnits={convertTempUnits}
                           convertSpeedUnits={convertSpeedUnits}
                  />
                  <Hourly weatherObj={weatherObj}
                          convertTempUnits={convertTempUnits}
                          convertSpeedUnits={convertSpeedUnits}
                  />
                  <Daily weatherObj={weatherObj}
                         convertTempUnits={convertTempUnits}
                         convertSpeedUnits={convertSpeedUnits}
                  />
                </View>
              : null
            }
            <AdMobBanner bannerSize="mediumRectangle"
                         style={styles.bottomBanner}
                         adUnitID="ca-app-pub-5662395825140930/7423867676"
                         servePersonalizedAds={true}
            />
          </ScrollView>      
        </ImageBackground>
      </View>
    );
  }
}

