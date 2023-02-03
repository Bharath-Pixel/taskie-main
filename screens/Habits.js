import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import { abs, color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTasks from "./CreateTasks";
import { useGlobalContext } from "../context";
import TouchableOpacity from "react-native-gesture-handler";

const colors = {
  themeColor: "#0A0A0A",
  white: "#DFDFDF",
  background: "#212121",
  appColor: "#1F222A",
};

const Task = ({ task, stamp, index }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { taskItems, setTaskItems } = useGlobalContext();

  const completeTask = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

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
              paddingTop: 5,
            }}
          >
            {stamp}
          </Text>
          <Checkbox
            style={[styles.checkBoxStyle]}
            disabled={false}
            color="#7B51E7"
            value={toggleCheckBox}
            onValueChange={(newValue) => {
              setToggleCheckBox(newValue);
              if (newValue) completeTask();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default function Habits(props) {
  const { taskItems } = useGlobalContext();
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
              marginTop: (Dimensions.get("screen").height * 0.05),
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
          Tasks ({taskItems.length})
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
        <View>
          {taskItems.length === 0 ? (
            <Text style={styles.emptyMessage}>No tasks available</Text>
          ) : (
            taskItems.map((task, id) => {
              return <Task task={task} stamp={task.timestamp} key={id} />;
            })
          )}
        </View>
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
    borderRadius: 6,
    position: "absolute",
    bottom: 10,
    left: 265,
  },
  emptyMessage: {
    fontFamily: "Poppins",
    color: "grey",
    fontSize: 20,
    textAlign: "center",
    marginTop: (Dimensions.get("screen").height * 0.12),
  },
});
