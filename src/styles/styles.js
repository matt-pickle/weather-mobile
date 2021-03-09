import {StyleSheet} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";

const styles = StyleSheet.create({

//GENERAL

app: {
  display: "flex",
  flexDirection: "column"
},

outputContainer: {
  display: "flex",
  flexDirection: "column"
},

//INPUT

inputContainer: {
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  display: "flex",
  width: "90%",
  maxWidth: 300,
  padding: 10,
  marginVertical: 20,
  marginHorizontal: "auto"
}

});

export default styles;