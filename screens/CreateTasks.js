import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import TaskCard from '../props/TaskCard.js';



const CreateTasks = ({navigation}) => { 
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy. splice (index, 1);
    setTaskItems(itemsCopy);
  }

    return (
      <View style={styles.container}>
        <View style={styles.buffer}>
          <Text style={[styles.sectionTitle]}>Tasks</Text>

          <ScrollView style={[styles.list]}>

            {/* <TaskCard c="Java" h="Practical 4" s="4pm today | 1.5 hours" /> */}
            {
              taskItems.map((item, index)=> {
                return (
                  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                    <TaskCard c=" " h={item} s=" " />
                  </TouchableOpacity>
                )
              })
            }
            <View style={[styles.toSee]}></View>

          </ScrollView>

          <KeyboardAvoidingView 
            behaviour={Platform.OS === "ios" ? "padding": "height"}
            style={styles.writeTaskWrapper}>
              <TextInput style = {styles.taskInput} placeholder={'Write a Task'} value={task} onChangeText={text=>setTask(text)} />

              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
};

export default CreateTasks;

const styles = StyleSheet.create({
  container: {  // the whole screen
    flex: 1, 
    backgroundColor:"#212121",
  },
  buffer: { // provides buffer
    top: "8%",
    left: "5%",
    width: "90%",
    height:'90%',
    backgroundColor:"#212121",
  },
  sectionTitle: { // header
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins",
  },
  addTask: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#8758FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%', 
    zIndex: 100
  },
  addTaskText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Poppins",
  },

  // For adding task
  addTaskBG: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: "center"
  },
  addTaskContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  writeTaskWrapper: {
    paddingVertical: 30,
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#8758FF",
    borderRadius: 20,
    borderColor: "#FFF",
    borderWidth: 1,
    width: "80%"
  },
  addWrapper: {
    width:50,
    height:50,
    backgroundColor: "#8758FF",
    borderColor: "#FFF",
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

  },
  toSee: {
    height: 150,
  }
});