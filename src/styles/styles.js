import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";

const styles = StyleSheet.create({

//GENERAL

app: {
  display: "flex",
  flexDirection: "column",
  lineHeight: 1.6
},

outputContainer: {
  display: "flex",
  flexDirection: "column"
},

//INPUT

inputContainer: {
  alignSelf: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  width: "90%",
  maxWidth: 300,
  padding: 10,
  marginVertical: 40
},

zipLabel: {
  color: "white",
  fontFamily: "Ubuntu_700Bold",
  textAlign: "center",
  fontSize: 18,
  marginTop: 0,
  marginHorizontal: 0,
  marginBottom: 15
},

zipInput: {
  backgroundColor: "white",
  fontSize: 18,
  textAlign: "center",
  height: 40,
  borderRadius: 5,
  marginTop: 0,
  marginHorizontal: 0,
  marginBottom: 15
},

button: {
  backgroundColor: "white",
  height: 40,
  borderRadius: 5,
  justifyContent: "center"
},

pressedButton: {
  backgroundColor: borderColor,
  height: 40,
  borderRadius: 5,
  justifyContent: "center"
},

buttonText: {
  color: "black",
  fontFamily: "Ubuntu_700Bold",
  fontSize: 18,
  textAlign: "center"
},

//CURRENT

currentContainer: {
  alignSelf: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  maxWidth: "90%",
  padding: 10,
  marginVertical: 0,
  marginHorizontal: 30
}

});

export default styles;