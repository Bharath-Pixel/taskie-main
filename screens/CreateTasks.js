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
  Animated
} from "react-native";
import { TaskCard, TutorialCard } from "../props/TaskCard.js";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGlobalContext } from "../context.js";
import DatePicker from "react-native-datepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreateTasks = ({ navigation }) => {
  const { taskItems, setTaskItems } = useGlobalContext();

  const [title, setTitle] = useState();
  const [tag, setTag] = useState("General");

  //Date usestate
  var [date, setDate] = useState(new Date());
  let forDate = "";

  const [adv, setADV] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  let [totalTasksCompletedToday, completed] = useState(0);
  let newDate;

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
    // forDate = date.toLocaleDateString();
    // let formatDate = forDate + " | " + calculateDays();
  }, [date]);

  useEffect(() => {
    // console.log(taskItems)
  }, [taskItems]);

  //Date
  const calculateDays = () => {
    const currentDate = new Date();
    const timeDiff = date.getTime() - currentDate.getTime();
    const diffDays = Math.round(timeDiff / (1000 * 3600 * 24));
    forDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
    setDate(newDate);
    setTitle(null);
    setADV(false);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    completed((totalTasksCompletedToday += 1));
  };

  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: 'true',
    }).start();

  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
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
              color: "#FEB47B",
              position: "absolute",
              bottom: (Dimensions.get("screen").height * 0.15),
              right: (Dimensions.get("screen").width * 0.00),
            }}
          />
        </TouchableOpacity>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.color}>
            <Text style={styles.modalHeader}>Set new Task</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                width: (Dimensions.get("screen").width * 0.85),
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
                justifyContent: "space-between",
                alignContent: "center",
                width: (Dimensions.get("screen").width * 0.85),
              }}
            >
              <Text style={styles.modalText}>Category: </Text>
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
                justifyContent: "space-between",
                alignContent: "center",
                width: (Dimensions.get("screen").width * 0.85),
              }}
            >
              <Text style={styles.modalText}>Due: </Text>
              <View style={{ paddingLeft: 25 }}>
                {/* <TextInput
                  style={styles.input}
                  placeholder="Enter Date"
                  onChangeText={(text) => setDate(text)}
                  value={date}
                /> */}
                <View style={{
                  position: "absolute", right: (Dimensions.get("screen").width * 0.05), top: (Dimensions.get("screen").height * 0.015),
                }} >
                  <View>
                    <Button
                      title={
                        date.toLocaleDateString()
                      }
                      onPress={showDatePicker}
                    />
                  </View>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>

              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: (Dimensions.get("screen").height * 0.05) }}>
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
    top: (Dimensions.get("screen").height * 0.08),
    left: (Dimensions.get("screen").width * 0.05),
    width: (Dimensions.get("screen").width * 0.9),
    height: (Dimensions.get("screen").height * 0.95),
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
    width: (Dimensions.get("screen").width * 0.8),
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  clearedTdy: {
    backgroundColor: "#FEB47B",
    height: (Dimensions.get("screen").height * 0.18),
    top: (Dimensions.get("screen").height * 0.02),
    width: (Dimensions.get("screen").width * 0.43),
    borderRadius: 20,
  },
  totalRemaining: {
    backgroundColor: "#FEB47B",
    height: (Dimensions.get("screen").height * 0.18),
    width: (Dimensions.get("screen").width * 0.43),
    left: (Dimensions.get("screen").width * 0.47),
    top: (Dimensions.get("screen").height * -0.16),
    borderRadius: 20,
  },
  t1: {
    color: "white",
    fontSize: 50,
    left: 32,
    top: 30,
    position: "absolute",
    marginBottom: 20,
  },
  t2: {
    color: "white",
    fontSize: 20,
    left: 35,
    top: 85,
    position: "absolute",
    width: (Dimensions.get("screen").width * 0.3),
  },
  list: {
    top: (Dimensions.get("screen").height * -0.15),
    height: 400,
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
    paddingTop: 20,
    fontSize: 30,
    fontFamily: "Poppins",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    paddingTop: 20,
    paddingLeft: 15,
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

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
});
