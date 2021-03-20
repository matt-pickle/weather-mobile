import React from 'react';
import {Text, View, ScrollView} from "react-native";
import styles from '../styles/styles';
import DayDisplay from "./DayDisplay";

function Daily(props) { 
  const daily = props.weatherObj.daily;

  const dayDisplays = daily.map(day => {
    return <DayDisplay dt={day.dt}
                       max={day.temp.max}
                       min={day.temp.min}
                       weather={day.weather}
                       feels_like={day.feels_like}
                       pop={day.pop}
                       humidity={day.humidity}
                       wind_speed={day.wind_speed}
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