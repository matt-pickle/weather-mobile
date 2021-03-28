import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";

const styles = StyleSheet.create({

//GENERAL

app: {
  paddingBottom: 40
},

topBar: {
  backgroundColor: "white",
  height: 25
},

adBanner: {
  alignSelf: "center"
},

loadingContainer: {
  alignSelf: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  width: 190,
  padding: 10,
  marginTop: 30,
  marginBottom: 500
},

loadingText: {
  color: "white",
  fontFamily: boldFont,
  fontSize: 25,
  textAlign: "center"
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
  marginTop: 20,
  marginBottom: 25
},

inputLabel: {
  color: "white",
  fontFamily: boldFont,
  textAlign: "center",
  fontSize: 18,
  marginTop: 0,
  marginHorizontal: 0,
  marginBottom: 15
},

or: {
  color: "white",
  fontFamily: boldFont,
  textAlign: "center",
  fontSize: 18,
  marginTop: 0,
  marginHorizontal: 0,
  marginBottom: 10,
  marginTop: 15 
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
  alignItems: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  maxWidth: "90%",
  padding: 10,
  marginBottom: 25
},

currentIcon: {
  resizeMode: "contain",
  width: 150,
  height: 150,  
  marginBottom: 10
},

currentDescription: {
  fontSize: 25,
  color: "white",
  fontFamily: lightFont,
  textTransform: "capitalize"
},

currentTemp: {
  fontSize: 90,
  color: "white",
  fontFamily: boldFont,
  lineHeight: 100,
  height: 95
},

degree: {
  fontFamily: lightFont
},

currentSmallText: {
  fontSize: 15,
  color: "white",
  fontFamily: lightFont,
  lineHeight: 25
},

//HOURLY & DAILY

sectionTitle: {
  color: "white",
  fontFamily: boldFont,
  textAlign: "center",
  fontSize: 30,
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  height: 50,
  width: 275,
  lineHeight: 50,
  marginLeft: 10,
  marginBottom: 5
},

hourlyContainer: {
  flexDirection: "row",
  paddingHorizontal: 10,
  paddingBottom: 5,
  marginBottom: 25
},

hourDisplay: {
  alignItems: "center",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  width: 115,
  padding: 8,
  marginRight: 5
},

hourDisplayHeader: {
  color: "white",
  fontFamily: boldFont,
  fontSize: 17,
  lineHeight: 22
},

hourIcon: {
  resizeMode: "contain",
  width: 90,
  height: 90,  
  marginVertical: 10
},

hourDescription: {
  fontSize: 18,
  color: "white",
  fontFamily: lightFont,
  textTransform: "capitalize",
  textAlign: "center",
},

hourTemp: {
  fontSize: 40,
  color: "white",
  fontFamily: boldFont,
},

dayTemp: {
  fontSize: 21,
  color: "white",
  fontFamily: boldFont,
  height: 35,
  lineHeight: 35
},

hourSmallText: {
  fontSize: 11,
  color: "white",
  fontFamily: lightFont,
  lineHeight: 18
}

});

export default styles;