
// edit
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Animated,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";
import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { TaskCard } from "../props/TaskCard";
import { setTask } from "../props/taskHandler";
import { useGlobalContext } from "../context";


const colors = {
  themeColor: "#0A0A0A",
  white: "#DFDFDF",
  background: "#212121",
  appColor: "#2C2C2C",
};

const Task = ({ task, stamp }) => {
  return (
    <View
      key={new Date().toString()}
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
          <Text style={[styles.taskText]}>{task.title}</Text>
          <Text
            style={{
              fontFamily: "Poppins",
              color: colors.white,
              paddingTop: "3%",
            }}
          >
            {stamp}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  StatusBar.setHidden(true);

  // const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const list = await AsyncStorage.getItem("tasklist");
  //       if (list !== null) {
  //         setTaskList(JSON.parse(list));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  const {taskItems} = useGlobalContext()

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/images/Vector.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            fontSize: 34,
            paddingTop: "25%",
            color: "white",
            textAlign: "left",
            paddingHorizontal: "8%",
            fontFamily: "Poppins",
          }}
        >
          Welcome To {"\n"}Taskie
        </Text>
        
        <View
          style={styles.inProgress}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              paddingHorizontal: "15%",
              fontFamily: "Poppins",
            }}
          >
            In progress :
          </Text>
        </View>
        <Text>
          
        </Text>

        <ScrollView
        style={{
          backgroundColor: colors.background,
        }}
      >
        {taskItems.map((task, id) => {
          return (
          <Task task={task} stamp={task.timestamp} key={id} />
        )})}
        
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  topWavy: {},
  bottom: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 0,
  },
  box: {
    backgroundColor: "#8758FF",
    height: "60%",
    shadowOpacity: 1,
  },
  vectorIcon: {
    width: "100%",
  },
  taskText: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 16,
    color: "white",
  },
  inProgress:{
    backgroundColor: "#2C2C2C",
    shadowOpacity: 5,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: "#000000",
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 35,
    borderRadius: 20,
    width: "40%",
    left: "15%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  }
});
