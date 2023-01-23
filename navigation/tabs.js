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
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "../screens/Homepage";
import CreateTasks from "../screens/CreateTasks";
import FlashCards from "../screens/FlashcardScreens/Flashcards";
import Pomo from "../screens/Pomo";
import Habits from "../screens/Habits";
import Stats from "../screens/Stats";
import Welcome from "../screens/Welcome";
import Search from "../screens/SearchTasks";
import Homepage2 from "../screens/Homepage2";

const TimerStats = createNativeStackNavigator();

function TimerStatsScreen() {
  return (
    <TimerStats.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TimerStats.Screen name="PomoScreen" component={Pomo} />
      <TimerStats.Screen name="StatsScreen" component={Stats} />
    </TimerStats.Navigator>
  );
}

const HabitsScreenStack = createNativeStackNavigator();

function HabitsStackScreen() {
  return (
    <HabitsScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HabitsScreenStack.Screen name="HabitsScreen" component={Habits} />
      <HabitsScreenStack.Screen name="SearchScreen" component={Search} />
    </HabitsScreenStack.Navigator>
  );
}

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
          borderRadius: 30,
          height: 90,
          ...styles.container,
          ...styles.shadow,
        },
        tabBarActiveTintColor: "#A07AFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage2}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Flashcards"
        component={FlashCards}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Add"
        component={CreateTasks}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircle" color={color} size={40} />
          ),
        })}
      />

      <Tab.Screen
        name="Habits"
        style={{ Text: false }}
        component={HabitsStackScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
          headerShown: false,
        })}
      />

      {/* <Tab.Screen name="Habits" component={Habits} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="Habits1" color={color} size={size} />
          ),
        })}/> */}

      <Tab.Screen
        name="Pomo"
        component={TimerStatsScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer" color={color} size={30} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
  },
});

export default Tabs;
