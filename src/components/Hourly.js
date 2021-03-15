import React from 'react';
import {Text, View, ScrollView} from "react-native";
import HourDisplay from "./HourDisplay";

function Hourly(props) { 
  const hourly = props.weatherObj.hourly;

  const hourDisplays = hourly.map(hour => {
    return <HourDisplay dt={hour.dt}
                        temp={hour.temp}
                        weather={hour.weather}
                        feels_like={hour.feels_like}
                        pop={hour.pop}
                        humidity={hour.humidity}
                        wind_speed={hour.wind_speed}
                        sunrise={props.weatherObj.current.sunrise}
                        sunset={props.weatherObj.current.sunset}
                        tomorrowSunrise={props.weatherObj.daily[1].sunrise}
                        tomorrowSunset={props.weatherObj.daily[1].sunset}
                        dayAfterTomorrowSunrise={props.weatherObj.daily[2].sunrise}
                        key={hour.dt}
           />
  });
  
  return (
    <View className="hourly-container">
      <Text className="section-title">Hourly Forecast</Text>
      <ScrollView className="hour-displays-container">
        {hourDisplays}
        {/* <div className="right-margin-spacer"></div> */}
      </ScrollView>
    </View>
  );
}

export default Hourly;
