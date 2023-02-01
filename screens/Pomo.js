import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Clock from "../props/Clock.js"
import Stats from "./Stats.js"



function ViewStackScreen(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stats" component={Stats}
        options={{
        headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const Pomo = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Pomodoro</Text>
        <Text style={[styles.des]}>Be more productive with a pomodoro timer</Text>
        <Clock/>
        <View style={styles.button}>
          <Button
            title="See Stats"
            onPress={() => navigation.navigate('StatsScreen')}
          />
        </View>
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
  buffer: { // provides buffer
    top: "8%",
    left: "5%",
    width: "90%",
    height:'80%',
    backgroundColor:"#212121",
  },
  sectionTitle: { // header
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins",
  },
  des: {
    color:"white",
    fontSize:15,
  },
  button: {
    top: "-5%"
  }
});
