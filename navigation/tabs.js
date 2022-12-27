import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Animated,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "../screens/Homepage";
import CreateTasks from "../screens/CreateTasks";
import FlashCards from "../screens/Flashcards";
import Progresspage from "../screens/ProgressPage";
import TaskManager from "../screens/Taskmanager";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#151515",
          overflow: "fixed",
          borderRadius:30,
          height:90,
            ...styles.container,
            ...styles.shadow
        },
      }}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Flashcards" component={FlashCards} />
      <Tab.Screen name="Tasks" component={CreateTasks} />
      <Tab.Screen name="Progress" component={Progresspage} />
      <Tab.Screen name="Manage" component={TaskManager} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    container:{
        borderTopWidth: 0,
    }
});

export default Tabs;
