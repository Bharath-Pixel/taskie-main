import React, { useState }   from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const stats = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Stats</Text>
        <Button
            style={styles.back}
             title="Back"
             onPress={() => navigation.goBack()}
         />
        <View style={[styles.main]}>
            <Text style={[styles.subtxt]}>Total Focus Time</Text>
            <Text style={[styles.maintxt]}>4h30m</Text>
            <Text style={[styles.subtxt]}>today</Text>
        </View>
        <View style={styles.c1}>
            <Text style={styles.c1t1}>90</Text>
            <Text style={styles.c1t2}>mins left</Text>
            <Text style={styles.c1t3}>Keep going, you're close to your daily goal</Text>
        </View>
        <View style={styles.c2}>
            <Text style={styles.c2t1}>3</Text>
            <Text style={styles.c2t2}>continuous pomos</Text>
        </View>
        <View style={styles.c3}>
            <Text style={styles.c2t1}>30</Text>
            <Text style={styles.c2t2}>mins more than yesterday</Text>
        </View>
      </View>
    </View>
  );
};

export default stats;

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
  main: {
    width: "100%",
    top: "15%",
  },
  maintxt: {
    color:"white",
    fontSize:70,
    textAlign:"center",
  },
  subtxt: {
    color:"white",
    fontSize:15,
    textAlign:"center",
  },
  back: {
    bottom: 1000,
  },

//   Mini card 1
  c1: {
    borderColor: "white",
    borderWidth: 1,
    height: "25%",
    top: "23%",
    borderRadius: 10,
  },
  c1t1: {
    color: "white",
    fontSize: 50,
    left: "15%",
    top: "30%",
    position: "absolute",
  },
  c1t2: {
    color: "white",
    fontSize: 20,
    left: "15%",
    top: "60%",
    position: "absolute",
  },
  c1t3: {
    color: "white",
    fontSize: 20,
    left: "55%",
    height: "70%",
    width: "40%",
    top: "30%",
  },
//   Mini card 2
  c2: {
    borderColor: "white",
    borderWidth: 1,
    height: "25%",
    top: "25%",
    width: "47%",
    borderRadius: 10,
  },
  c2t1: {
    color: "white",
    fontSize: 50,
    left: "20%",
    top: "25%",
    position: "absolute",
  },
  c2t2: {
    color: "white",
    fontSize: 20,
    left: "20%",
    top: "55%",
    position: "absolute",
    width: "80%"
  },
//   Mini card 3
  c3: {
    borderColor: "white",
    borderWidth: 1,
    height: "25%",
    width: "47%",
    left: "53%",
    borderRadius: 10,
  },
});
