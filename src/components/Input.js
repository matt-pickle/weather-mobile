import React, {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import styles from "../styles/styles.js";
import CustomButton from "./CustomButton";

function Input(props) { 
  const [zip, setZip] = useState("");

  function handleChange(text) {
    setZip(text);
  }

  function handleSubmit() {
    props.handleZipSubmit(zip);
    setZip("");
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
                 value={zip}
                 onChangeText={handleChange}
      />
      <CustomButton onPress={handleSubmit}
                    text="Submit"
      />
    </View>
  );
}

export default Input;