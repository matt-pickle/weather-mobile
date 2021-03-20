import React, {useState} from "react";
import {Text, Pressable} from "react-native";
import styles from "../styles/styles.js";

function CustomButton(props){
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable style={isPressed ? styles.pressedButton : styles.button}
               onPressIn ={() => setIsPressed(true)}
               onPressOut={() => setIsPressed(false)}
               onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  )
}

export default CustomButton;