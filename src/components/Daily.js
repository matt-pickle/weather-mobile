import React from 'react';
import {Text, View, ScrollView} from "react-native";
import styles from '../styles/styles';
import DayDisplay from "./DayDisplay";

function Daily(props) { 
  const daily = props.weatherObj.daily;

  const dayDisplays = daily.map(day => {
    const maxTemp = props.convertTempUnits(day.temp.max);
    const minTemp = props.convertTempUnits(day.temp.min);
    const windSpeed = props.convertSpeedUnits(day.wind_speed);
    return <DayDisplay dt={day.dt}
                       max={maxTemp}
                       min={minTemp}
                       weather={day.weather}
                       feels_like={day.feels_like}
                       pop={day.pop}
                       humidity={day.humidity}
                       windSpeed={windSpeed}
                       key={day.dt}
           />
  });
  
  return (
    <View>
      <Text style={styles.sectionTitle}>7 Day Forecast</Text>
      <ScrollView style={styles.hourlyContainer}
                  horizontal={true}
      >
        {dayDisplays}
      </ScrollView>
    </View>
  )
}

export default Daily;