import React from 'react';
import {Text, View, ScrollView} from "react-native";
import styles from '../styles/styles';
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
                        dayAfterTomorrowSunset={props.weatherObj.daily[2].sunset}
                        key={hour.dt}
           />
  });
  
  return (
    <View>
      <Text style={styles.sectionTitle}>Hourly Forecast</Text>
      <ScrollView style={styles.hourlyContainer}
                  horizontal={true}
      >
        {hourDisplays}
      </ScrollView>
    </View>
  );
}

export default Hourly;
