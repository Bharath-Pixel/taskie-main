import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export function TaskCard({c,h,s}) {
    return(
        <View style={[styles.taskCard]}>
            <Text style={[styles.taskCategory]}>{c}</Text>
            <Text style={[styles.taskHeader]}>{h}</Text>
            <Text style={[styles.taskSubHeader]}>{s}</Text>
        </View> 
    )
}

export function TutorialCard({c,h,s}) {
  return(
      <View style={[styles.tutorialCard]}>
          <Text style={[styles.taskCategory]}>{c}</Text>
          <Text style={[styles.taskHeader]}>{h}</Text>
          <Text style={[styles.taskSubHeader]}>{s}</Text>
      </View> 
  )
}

const styles = StyleSheet.create({
  // For Tasks
  toSee: {
    marginBottom: "40%",
  },
  taskCard: {
    marginTop: "5%",
    width: '100%',
    paddingBottom: '5%',
    paddingTop: '5%',
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  taskCategory: {
    color: 'black',
    left: "10%",
    width: "80%",
    fontSize: 14,
    fontFamily: "Poppins",
    paddingBottom:10,
    textAlign:"center"
  },
  taskHeader: {
    left: "10%",
    width: "80%",
    paddingBottom:10,
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign:"center"
  },
  taskSubHeader: {
    color: 'black',
    left: "10%",
    width: "80%",
    fontSize: 14,
    fontFamily: "Poppins",
    textAlign:"center"
  },

  // Tutorial 
  tutorialCard: {
    marginTop: "5%",
    width: '100%',
    paddingBottom: '5%',
    paddingTop: '5%',
    borderRadius: 20,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
})
