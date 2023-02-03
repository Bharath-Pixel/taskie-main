import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Clock from "../props/Clock.js"





const Pomo = () => {

  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Pomodoro</Text>
        <Text style={[styles.des]}>Be more productive with this timer!</Text>
        <Clock/>
      </View>
    </View>
  );
};

export default Pomo;

const styles = StyleSheet.create({
  container: {  // the whole screen
    flex: 1, 
    backgroundColor:"#212121",
  },
  buffer: {
    // provides buffer
    top: (Dimensions.get("screen").height * 0.08),
    left: (Dimensions.get("screen").width * 0.05),
    width: (Dimensions.get("screen").width * 0.9),
    height: (Dimensions.get("screen").height * 0.95),
    backgroundColor: "#212121",
  },
  sectionTitle: { // header
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins",
    textAlign:"center",
  },
  des: {
    color:"white",
    fontSize:16,
    fontFamily: "Poppins",
    paddingTop:(Dimensions.get("screen").width * 0.15),
    alignSelf: "center",
    position:"absolute",
  },
});
