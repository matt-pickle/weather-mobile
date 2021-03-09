import React, {useState} from 'react';
import {View, Text, TextInput} from "react-native";
import Button from "./Button";
import styles from "../styles/styles.js";

function Input(props) { 
  const [zip, setZip] = useState("");

  function handleChange(event) {
    setZip(event.target.value);
  }

  function handleSubmit(event) {
    props.handleZipSubmit(zip);
    setZip("");
    event.preventDefault();
  }

  return (
    <View style={styles.inputContainer} className="input-container">
      <Text htmlFor="zip-input" className="zip-label">Enter your Zip code (USA only)</Text>
      <TextInput id="zip-input"
             type="text"
             value={zip}
             onChange={handleChange}
      />
      {/* <Button text="Submit"
              onClick={handleSubmit}
      /> */}
    </View>
  );
}

export default Input;