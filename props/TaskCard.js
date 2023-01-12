import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function TaskCard({c,h,s}) {
    return(
        <View style={[styles.taskCard]}>
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
    borderRadius: 10,
    backgroundColor: 'gray',
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
})

export default TaskCard