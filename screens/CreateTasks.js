import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// const task = (props) => {
//   return (
//     <View style={styles.taskCard}>
//       <Text style={styles.taskCategory}>{props.c}</Text>
//       <Text style={styles.taskHeader}>{props.h}</Text>
//       <Text style={styles.taskSubHeader}>{props.s}</Text>
//     </View>
//   )
// }

const CreateTasks = ({navigation}) => { 
    return (
      <View style={styles.container}>
        <View style={styles.buffer}>
          <Text style={[styles.sectionTitle]}>Tasks</Text>
          <View style={styles.addTask}> 
            <Text style={styles.addTaskText}>New Task</Text>
          </View>
          {/* <App.task c="Java" h="Practical 4" s="4pm today | 1.5 hours"></App.task> */}

          <View style={[styles.taskCard]}>
            <Text style={[styles.taskCategory]}>Java</Text>
            <Text style={[styles.taskHeader]}>Practical 4</Text>
            <Text style={[styles.taskSubHeader]}>4pm today | 1.5 hours</Text>
          </View>

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
    bottom: 0, 
  },
  addTaskText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Poppins",
  },

  // For Tasks
  taskCard: {
    top: "3%",
    width: '100%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: '#8758FF',
    justifyContent: 'center',
  },
  taskCategory: {
    color: '#fff',
    left: "10%",
    fontSize: 13,
    fontFamily: "Poppins",
  },
  taskHeader: {
    color: '#fff',
    left: "10%",
    fontSize: 25,
    fontFamily: "Poppins",
  },
  taskSubHeader: {
    color: '#fff',
    left: "10%",
    fontSize: 15,
    fontFamily: "Poppins",
  },
});