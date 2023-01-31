import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const colors = {
  themeColor: "#0A0A0A",
  white: "#DFDFDF",
  background: "#212121",
  appColor: "#1F222A",
};

export function TaskCard({category, title, timestamp}) {
    return(
        <View style={[styles.taskCard]}>
            <Text style={[styles.taskCategory]}>{category}</Text>
            <Text style={[styles.taskHeader]}>{title}</Text>
            <Text style={[styles.taskSubHeader]}>{timestamp}</Text>
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
    backgroundColor: '#A07AFF',
    shadowOpacity: 5,
    shadowRadius: 1,
    shadowOffset: { height: 2, width: 2 },
    shadowColor: "#0A0A0A",
    
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
