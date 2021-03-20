import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from "react-native";
import styles from "../styles/styles.js";

function Input(props) { 
  const [zip, setZip] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  function handleChange(text) {
    setZip(text);
  }

  function handleSubmit() {
    props.handleZipSubmit(zip);
    setZip("");
  }

  return (
    <View style={styles.inputContainer}>
      <Pressable style={isPressed ? styles.pressedButton : styles.button}
                 onPressIn ={() => setIsPressed(true)}
                 onPressOut={() => setIsPressed(false)}
                 onPress={props.getLocation}
      >
        <Text style={styles.buttonText}>Use Current Location</Text>  
      </Pressable>
      <Text style={styles.inputLabel}>- OR -</Text>
      <Text style={styles.inputLabel}>Enter your Zip code (USA only)</Text>
      <TextInput style={styles.zipInput}
                 type="text"
                 value={zip}
                 onChangeText={handleChange}
      />
      <Pressable style={isPressed ? styles.pressedButton : styles.button}
                 onPressIn={() => setIsPressed(true)}
                 onPressOut={() => setIsPressed(false)}
                 onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default Input;