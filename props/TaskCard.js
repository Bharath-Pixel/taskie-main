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
    marginTop: "3%",
    width: '100%',
    paddingBottom: '5%',
    paddingTop: '5%',
    borderRadius: 10,
    backgroundColor: '#8758FF',
    justifyContent: 'center',
  },
  taskCategory: {
    color: '#fff',
    left: "10%",
    width: "80%",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  taskHeader: {
    color: '#fff',
    left: "10%",
    width: "80%",
    fontSize: 20,
    fontFamily: "Poppins",
  },
  taskSubHeader: {
    color: '#fff',
    left: "10%",
    width: "80%",
    fontSize: 15,
    fontFamily: "Poppins",
  },
})

export default TaskCard