import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, createContext } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { TaskCard, TutorialCard } from "../props/TaskCard.js";
import AntDesign from "react-native-vector-icons/AntDesign";

const CreateTasks = ({ navigation,route}) => {
  console.log('elliott', route.params)
  const { taskItems } = route.params
  const [title, setTitle] = useState();
  const [tag, setTag] = useState("General");

  //Date usestate
  var [date, setDate] = useState(new Date());
  let forDate = "";

  //Array for the items to add on
  const [adv, setADV] = useState(false);

  let [totalTasksCompletedToday, completed] = useState(0);

  //updates days remaining
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      completed(0);
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  //date formatting
  useEffect(() => {
    forDate = date.toLocaleDateString();
    let formatDate = forDate + " | " + calculateDays();
  }, [date]);

  //Date
  const calculateDays = () => {
    const currentDate = new Date();
    const timeDiff = date.getTime() - currentDate.getTime();
    const diffDays = Math.round(timeDiff / (1000 * 3600 * 24));
    if (date.setHours(0, 0, 0, 0) == currentDate.setHours(0, 0, 0, 0)) {
      return "Today";
    } else if (diffDays < 0) {
      return Math.abs(diffDays) + " days ago";
    } else {
      return diffDays + " days left";
    }
  };

  const handleAddTask = async () => {
    Keyboard.dismiss();
    if (forDate.length === 0) {
      forDate =
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    }
    let formatDate = forDate + " | " + calculateDays();

    // await AsyncStorage.setItem('@tasklist', JSON.stringify(taskItems))
    setTaskItems([...taskItems, [title, tag, formatDate]]);
    console.log(taskItems);
    setTag("General");
    setDate(new Date());
    setTitle(null);
    setADV(false);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    completed((totalTasksCompletedToday += 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Tasks</Text>
        <Text style={[styles.instructions]}>
          Add button creates new task. Tap to clear Task
        </Text>
        <View style={styles.clearedTdy}>
          <Text style={styles.t1}>{totalTasksCompletedToday}</Text>
          <Text style={styles.t2}>Completed Today</Text>
        </View>
        <View style={styles.totalRemaining}>
          <Text style={styles.t1}>{taskItems.length}</Text>
          <Text style={styles.t2}>Total Remaining</Text>
        </View>

        <ScrollView style={[styles.list]}>
          <View>
            {taskItems.length === 0 ? (
              <TutorialCard
                c="Tutorial"
                h="Write your tasks down one by one"
                s="No due date"
              />
            ) : (
              taskItems
                .sort(
                  (a, b) => new Date(a[2]).getTime() - new Date(b[2]).getTime()
                )
                .map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => completeTask(index)}
                    >
                      <TaskCard c={item[1]} h={item[0]} s={item[2]} />
                    </TouchableOpacity>
                  );
                })
            )}
          </View>
          <View style={[styles.toSee]}></View>
        </ScrollView>

        <View style={[styles.popup]}>
          <Modal
            style={styles.modalContainer}
            animationType="fade"
            visible={adv}
            transparent={true}
            onRequestClose={() => setADV(false)}
          >
            <View style={[styles.color]}>
              <Text>Add a Tag</Text>
              <TextInput
                keyboardAppearance="dark"
                style={styles.taskInput}
                placeholder={"Tags help with organisation"}
                placeholderTextColor={"#d3d3d3"}
                value={tag}
                onChangeText={(text) => setTag(text)}
              />
              <Text>Due date</Text>
              <TextInput
                keyboardAppearance="dark"
                style={styles.taskInput}
                placeholder={"MM/DD/YYYY"}
                placeholderTextColor={"#d3d3d3"}
                value={date}
                onChangeText={(text) => setDate(new Date(text))}
              />
              <KeyboardAvoidingView
                behaviour={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.newWriteTaskWrapper}
              >
                {/* Title */}
                <TextInput
                  keyboardAppearance="dark"
                  style={styles.taskInput}
                  placeholder={"Enter Task here..."}
                  placeholderTextColor={"#d3d3d3"}
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
                {/* 
                    <TouchableOpacity onPress={() => setADV(true)}>
                      <View style={styles.addWrapper}>
                        <AntDesign name='setting' style={{ color: 'white', fontSize: 20 }}/>
                      </View>
                    </TouchableOpacity> */}

                <TouchableOpacity
                  onPress={() => handleAddTask()}
                  onLongPress={() => setADV(true)}
                >
                  <View style={styles.addWrapper}>
                    <AntDesign name="plus" style={{ color: "white", fontSize: 20 }} />
                  </View>
                </TouchableOpacity>
                {/* <TextInput keyboardAppearance='dark' style = {styles.taskInput} placeholder={'Enter Task here...'} placeholderTextColor={"#d3d3d3"} value={task} onChangeText={text=>setTask(text)} />

                    <TouchableOpacity onPress={() => handleAddTask()}>
                      <View style={styles.addWrapper}>
                        <AntDesign name='plus' style={{ color: 'white', fontSize: 20 }}/>
                      </View>
                    </TouchableOpacity> */}
              </KeyboardAvoidingView>
            </View>
          </Modal>
        </View>

        {/* Move content above keyboard */}
        <KeyboardAvoidingView
          behaviour={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          {/* Title */}
          <TextInput
            keyboardAppearance="dark"
            style={styles.taskInput}
            placeholder={"Enter Task here..."}
            placeholderTextColor={"#d3d3d3"}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          {/* 
              <TouchableOpacity onPress={() => setADV(true)}>
                <View style={styles.addWrapper}>
                  <AntDesign name='setting' style={{ color: 'white', fontSize: 20 }}/>
                </View>
              </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => handleAddTask()}
            onLongPress={() => setADV(true)}
          >
            <View style={styles.addWrapper}>
              <AntDesign name="plus" style={{ color: "white", fontSize: 20 }} />
            </View>
          </TouchableOpacity>
          {/* <TextInput keyboardAppearance='dark' style = {styles.taskInput} placeholder={'Enter Task here...'} placeholderTextColor={"#d3d3d3"} value={task} onChangeText={text=>setTask(text)} />

              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <AntDesign name='plus' style={{ color: 'white', fontSize: 20 }}/>
                </View>
              </TouchableOpacity> */}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default CreateTasks;

const styles = StyleSheet.create({
  container: {
    // the whole screen
    flex: 1,
    backgroundColor: "#212121",
  },
  buffer: {
    // provides buffer
    top: "8%",
    left: "5%",
    width: "90%",
    height: "90%",
    backgroundColor: "#212121",
  },
  sectionTitle: {
    // header
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  addTask: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#8758FF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    zIndex: 100,
  },
  addTaskText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins",
  },
  instructions: {
    fontFamily: "Poppins",
    color: "white",
    paddingTop: 10,
    fontSize: 16,
    textAlign: "center",
  },

  // For adding task
  addTaskBG: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: "center",
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
    alignItems: "center",
  },
  newWriteTaskWrapper: {
    paddingVertical: 30,
    position: "absolute",
    top: "83%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#A07AFF",
    borderRadius: 20,
    width: "80%",
    fontFamily: "Urbanist",
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#A07AFF",
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
    borderRadius: 20,
  },
  totalRemaining: {
    backgroundColor: "#FEB47B",
    height: "20%",
    width: "47%",
    left: "53%",
    top: "-18%",
    borderRadius: 20,
  },
  t1: {
    color: "white",
    fontSize: 50,
    left: "20%",
    top: "20%",
    position: "absolute",
    marginBottom: 20,
  },
  t2: {
    color: "white",
    fontSize: 20,
    left: "20%",
    top: "55%",
    position: "absolute",
    width: "60%",
  },
  list: {
    top: "-16%",
    marginBottom: "-30%",
  },
  modalContainer: {
    width: "10%",
    height: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "100%",
    height: "15%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    bottom: "18%",
  },
  color: {
    backgroundColor: "#A07AFF",
    top: "68%",
    left: "5%",
    height: "14%",
    width: "90%",
  },
});

