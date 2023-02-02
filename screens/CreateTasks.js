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
  Dimensions,
  Alert,
} from "react-native";
import { TaskCard, TutorialCard } from "../props/TaskCard.js";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGlobalContext } from "../context.js";

const CreateTasks = ({ navigation }) => {
  const { taskItems, setTaskItems } = useGlobalContext();

  const [title, setTitle] = useState();
  const [tag, setTag] = useState("General");

  //Date usestate
  var [date, setDate] = useState(new Date());
  let forDate = "";

  const [adv, setADV] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  let [totalTasksCompletedToday, completed] = useState(0);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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

  useEffect(() => {
    // console.log(taskItems)
  }, [taskItems]);

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
    handleCloseModal();
    Keyboard.dismiss();
    if (forDate.length === 0) {
      forDate =
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    }
    let formatDate = forDate + " | " + calculateDays();
    setTaskItems([
      ...taskItems,
      {
        title: title,
        category: tag,
        timestamp: formatDate,
      },
    ]);
    // console.log(taskItems);
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
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <TaskCard
                      category={item.category}
                      timestamp={item.timestamp}
                      title={item.title}
                      key={index}
                    />
                  </TouchableOpacity>
                );
              })
            )}
          </View>
          <View style={[styles.toSee]}></View>
        </ScrollView>
        {/* Move content above keyboard */}
        <TouchableOpacity onPress={handleOpenModal}>
          <AntDesign
            name="pluscircle" //
            size={60}
            style={{
              color: "#A07AFF",
              position: "absolute",
              bottom: 85,
              right: "5%",
            }}
          />
        </TouchableOpacity>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.color}>
            <Text style={styles.modalHeader}>Set new Task</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text style={styles.modalText}>New Task Title: </Text>
              <View style={{ paddingLeft: 25 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Title"
                  onChangeText={(text) => setTitle(text)}
                  value={title}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text style={styles.modalText}> Category: </Text>
              <View style={{ paddingLeft: 25 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Tag"
                  onChangeText={(text) => setTag(text)}
                  value={tag}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text style={styles.modalText}>Due: </Text>
              <View style={{ paddingLeft: 25 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Date"
                  onChangeText={(text) => setDate(text)}
                  value={date}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 20 }}>
              <TouchableOpacity style={styles.b1} onPress={handleCloseModal}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.b2}
                onPress={() => {
                  if (!title) {
                    Alert.alert("Please enter a title.");
                    return;
                  }
                  handleAddTask();
                  handleCloseModal();
                }}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    top: "-17%",
    // marginBottom: "-30%",
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#A07AFF",
    borderRadius: 90,
  },
  starter: {
    // marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: Dimensions.get("screen").height * 0.27,
    backgroundColor: "#FEB47B",
    borderRadius: 90,
    alignSelf: "center",
    // position: "absolute",
  },
  stfont: {
    fontSize: 20,
    color: "white",
  },
  timer: {
    color: "white",
    fontSize: 90,
  },
  // Modal
  range: {
    color: "white",
    fontSize: 25,
    top: Dimensions.get("screen").height * 0.25,
    alignSelf: "center",
    // top: "55%",
    // left: "30%",
  },
  color: {
    backgroundColor: "#222",
    borderColor: "#A07AFF",
    borderWidth: 1,
    borderRadius: 10,
    top: Dimensions.get("screen").height * 0.3,
    left: Dimensions.get("screen").width * 0.05,
    height: Dimensions.get("screen").height * 0.4,
    width: Dimensions.get("screen").width * 0.9,
  },
  modalHeader: {
    color: "white",
    paddingTop: "5%",
    paddingLeft: "5%",
    fontSize: 30,
    fontFamily: "Poppins",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    paddingTop: "5%",
    paddingLeft: "5%",
    fontSize: 18,
    fontFamily: "Poppins",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#222",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: Dimensions.get("screen").height * 0.04,
    top: Dimensions.get("screen").height * 0.02,
    width: Dimensions.get("screen").width * 0.3,
    color: "white",
    textAlign: "center",
    fontFamily: "Urbanist",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  b1: {
    left: Dimensions.get("screen").width * 0.1,
    top: Dimensions.get("screen").height * 0.03,
    paddingVertical: Dimensions.get("screen").height * 0.015,
    backgroundColor: "#8758FF",
    borderRadius: 10,
    paddingHorizontal: Dimensions.get("screen").width * 0.05,
  },
  b2: {
    left: Dimensions.get("screen").width * 0.25,
    top: Dimensions.get("screen").height * 0.03,
    backgroundColor: "#FEB47B",
    paddingVertical: Dimensions.get("screen").height * 0.015,
    borderRadius: 10,
    paddingHorizontal: Dimensions.get("screen").width * 0.05,
  },
  details: {
    color: "white",
    top: Dimensions.get("screen").height * 0.25,
    alignSelf: "center",
  },
});
