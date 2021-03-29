import React, {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import styles from "../styles/styles.js";
import CustomButton from "./CustomButton";

function Input(props) { 
  const [cityName, setCityName] = useState("");

  function handleChange(text) {
    setCityName(text);
  }

  function handleSubmit() {
    props.handleCitySubmit(cityName);
    setCityName("");
  }

  return (
    <View style={styles.inputContainer}>
      <CustomButton onPress={props.getLocation}
                    text="Use Current Location"
      />
      <Text style={styles.or}>- OR -</Text>
      <Text style={styles.inputLabel}>Enter your Zip code (USA only)</Text>
      <TextInput style={styles.zipInput}
                 type="text"
                 value={cityName}
                 onChangeText={handleChange}
      />
      <CustomButton onPress={handleSubmit}
                    text="Submit"
      />
    </View>
  );
}

export default Input;