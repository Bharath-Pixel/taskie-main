import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function ProgressCard({c,h,s}) {
    return(
        <View style={[styles.taskCard]}>
            <Text style={[styles.title]}>{t}</Text>
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
    // paddingBottom: '7.5%',
    // paddingTop: '7.5%',
    paddingBottom: '1%',
    paddingTop: '1%',
    borderRadius: 10,
    backgroundColor: '#8758FF',
    justifyContent: 'center',
  },
})

export default ProgressCard