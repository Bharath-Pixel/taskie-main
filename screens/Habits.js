import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import Checkbox from "expo-checkbox";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import { abs, color } from "react-native-reanimated";
import { TouchableHighlight } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTasks from "./CreateTasks";

const colors = {
  themeColor: "#0A0A0A",
  white: "#DFDFDF",
  background: "#212121",
  appColor: "#1F222A",
};

const tasks = [
  {
    id: 1,
    task: "Morning Walk",
    stamp: "Today",
  },
  {
    id: 2,
    task: "Meet with HR",
    stamp: "Today",
  },
  // {
  //   id: 3,
  //   task: "Study FOP",
  //   stamp: "Tomorrow - 3pm",
  // },
  // {
  //   id: 4,
  //   task: "Time for Gym",
  //   stamp: "Saturday - 4pm",
  // },
];

// const useTasks = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       task: "Morning Walk",
//       stamp: "Today - 8am",
//     },
//     {
//       id: 2,
//       task: "Meet with HR",
//       stamp: "Today - 12 noon",
//     },
//     {
//       id: 3,
//       task: "Study FOP",
//       stamp: "Tomorrow - 3pm",
//     },
//     {
//       id: 4,
//       task: "Time for Gym",
//       stamp: "Saturday - 4pm",
//     },
//   ]);

//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   }

//   return { tasks, addTask };
// }

const Task = ({ task, stamp }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View
      key={task.id}
      style={{
        backgroundColor: colors.appColor,
        color: colors.white,
        shadowOpacity: 5,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 1 },
        shadowColor: "#000000",
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 5,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text style={[styles.taskText]}>{task}</Text>
          <Text
            style={{
              fontFamily: "Poppins",
              color: colors.white,
              paddingTop: "3%",
            }}
          >
            {stamp}
          </Text>
          <Checkbox
            style={[styles.checkBoxStyle]}
            disabled={false}
            color="#7B51E7"
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
        </View>
      </View>
    </View>
  );
};

export default function Habits(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            marginTop: 30,
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
        <View style={{ padding: 16, bottom: 10 }}>
          <Text
            style={{
              fontFamily: "Poppins",
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: "5%",
            }}
          >
            {"Habits"}
          </Text>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "Poppins", fontSize: 22, color: "white" }}>
          Tasks (4)
        </Text>
        <AntDesign
          onPress={() => navigation.navigate("SearchScreen")}
          name="search1" //
          size={30}
          style={{
            color: "white",
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {tasks.map((taskie) => (
          <Task task={taskie.task} stamp={taskie.stamp} key={taskie.id} />
        ))}
        <AntDesign
          onPress={() => navigation.navigate("AddScreen")}
          name="pluscircle" //
          size={50}
          style={{
            color: "#A07AFF",
            position: "absolute",
            borderRadius: 20,
            right: "43%",
            top: "100%",
            marginTop: 40,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  text: {
    fontFamily: "Poppins",
    color: "white",
  },
  taskText: {
    fontFamily: "Poppins",
    fontSize: 18,
    color: "#DFDFDF",
  },
  backButton: {
    top: 10,
  },
  checkBoxStyle: {
    borderRadius: 5,
    position: "absolute",
    bottom: 10,
    left: 265,
  },
});
