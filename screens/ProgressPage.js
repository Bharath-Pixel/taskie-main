import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Progresspage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Projects</Text>

        <ScrollView style={[styles.content]}>

        </ScrollView>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Progresspage;

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
  addWrapper: {
    width:50,
    height:50,
    left: "86%",
    backgroundColor: "#FFF",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

  },
  content: {
    height: "20%",
    borderColor: "black"
  }
});
