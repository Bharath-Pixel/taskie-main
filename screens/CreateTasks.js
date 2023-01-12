import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import TaskCard from '../props/TaskCard.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

    return (
      <View style={styles.container}>
        <View style={styles.buffer}>
          <Text style={[styles.sectionTitle]}>Tasks</Text>
          <Text style={[styles.instructions]}>Create new task with the add button. Tap on tasks to clear</Text>

          <View style={styles.clearedTdy}>
              <Text style={styles.t1}>5</Text>
              <Text style={styles.t2}>Completed Today</Text>
            </View>
            <View style={styles.totalRemaining}>
              <Text style={styles.t1}>7</Text>
              <Text style={styles.t2}>Total Remaining</Text>
            </View>

          <ScrollView style={[styles.list]}>

            <TaskCard c="Tutorial" h="Write your tasks down one by one" s="No due date" />
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
              <TextInput keyboardAppearance='dark' style = {styles.taskInput} placeholder={'Enter Task here...'} placeholderTextColor={"#d3d3d3"} value={task} onChangeText={text=>setTask(text)} />

              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                <AntDesign name='plus' style={{ color: 'white', fontSize: 20 }}/>
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
  instructions: {
    color: "white",
    fontSize: 15,
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
    backgroundColor: "#A07AFF",
    borderRadius: 20,
    borderColor: "#8758FF",
    borderWidth: 2,
    width: "80%"
  },
  addWrapper: {
    width:50,
    height:50,
    backgroundColor: "#A07AFF",
    borderColor: "#8758FF",
    borderWidth: 2,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",

  },
  toSee: {
    height: 20,
  },
  clearedTdy: {
    backgroundColor: "#FEB47B",
    height: "20%",
    top: "2%",
    width: "47%",
    borderRadius: 10,
  },
  totalRemaining: {
    backgroundColor: "#FEB47B",
    height: "20%",
    width: "47%",
    left: "53%",
    top: "-18%",
    borderRadius: 10,
  },
  t1: {
    color: "white",
    fontSize: 50,
    left: "20%",
    top: "20%",
    position: "absolute",
  },
  t2: {
    color: "white",
    fontSize: 20,
    left: "20%",
    top: "55%",
    position: "absolute",
    width: "60%"
  },
  list: {
    top: "-16%"
  }
});