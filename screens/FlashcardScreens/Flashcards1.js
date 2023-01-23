import {React,useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ProgressBar, MD3Colors } from "react-native-paper";
// import GlobalFont from 'react-native-global-font'

const FlashCards1 = ({}) => {
  return (
    <View
      style={{
        backgroundColor: "#212121",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1 / 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <AntDesign name="arrowleft" color={"white"} size={24} />
        <Text
          style={{
            paddingVertical: "5%",
            textAlign: "center",
            color: "white",
            fontSize: 24,
          }}
        >
          3/15
        </Text>
        <AntDesign name="arrowright" color={"white"} size={24} />
      </View>
      <ProgressBar progress={0.3} color={MD3Colors.primary40} />
      <View
        style={{
          marginTop: "10%",
          flex: 0.7,
          backgroundColor: "#dabcf9",
          width: "80%",
          marginLeft: "10%",
          marginBottom: "10%",
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24,marginTop:"40%", paddingVertical: "5%",fontFamily:"Poppins" }}>Question 1</Text>
        <Text style={{ fontSize: 16, paddingVertical: "15%",fontFamily:"Poppins",textAlign:"center" }}>
          What Color is an Orange? 
        </Text>
      </View>
      <Text
        style={{
          marginBottom: "20%",
          color: "white",
          textAlign: "center",
          fontSize: 16,
          fontFamily:"Poppins"
        }}
      >
        Tap Card to see answers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "Poppins",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  goBack: {
    position: "absolute",
    top: 20,
  },


});

export default FlashCards1;

