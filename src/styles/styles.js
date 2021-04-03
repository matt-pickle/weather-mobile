import {StyleSheet} from 'react-native';

const backgroundColor = "rgba(0,0,0,0.5)";
const borderColor = "rgba(0,0,0,0.6)";
const boldFont = "Ubuntu_700Bold";
const lightFont ="Ubuntu_400Regular";

const styles = StyleSheet.create({

//ADS

topBanner: {
  alignSelf: "center",
},

bottomBanner: {
  alignSelf: "center",
  marginVertical: 25
},

//CURRENT

sectionTitle: {
  alignSelf: "flex-start",
  flexWrap: "wrap",
  color: "white",
  fontFamily: boldFont,
  fontSize: 25,
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  // lineHeight: 40,
  paddingVertical: 5,
  paddingHorizontal: 15,
  marginTop: 25,
  marginLeft: 10
},

currentContainer: {
  alignSelf: "flex-start",
  flexDirection: "row",
  backgroundColor: backgroundColor,
  borderColor: borderColor,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 10,
  padding: 5,
  marginVertical: 5,
  marginLeft: 10
},

currentColumnLeft: {
  alignSelf: "flex-start",
  alignItems: "center",
  margin: 5
},

currentColumnRight: {
  alignSelf: "flex-start",
  alignItems: "flex-start",
  margin: 5
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
  lineHeight: 90,
  height: 75,
},

currentTempTripleDigits: {
  fontSize: 60,
  color: "white",
  fontFamily: boldFont,
  lineHeight: 60,
  height: 55,
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

hourlyContainer: {
  flexDirection: "row",
  paddingBottom: 5,
  paddingLeft: 10,
  marginTop: 5,
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