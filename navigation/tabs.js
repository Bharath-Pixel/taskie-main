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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import Homepage from "../screens/Homepage";
import CreateTasks from "../screens/CreateTasks";
import FlashCards from "../screens/Flashcards";
import Progresspage from "../screens/ProgressPage";
import AddTask from "../screens/ViewTasks";

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
      }
      
    }
    >
      <Tab.Screen name="Home" component={Homepage} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        })} />
      <Tab.Screen name="Flashcards" component={FlashCards} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        })}/>
         
      <Tab.Screen name="Add" component={CreateTasks} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="pluscircle" color={color} size={40} />
          ),
        })} />
        <Tab.Screen name="Tasks" style={{Text:false}} component={AddTask} options={({}) => ({
          
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
          headerShown:false
        })}/>

      <Tab.Screen name="Timer" component={Progresspage} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="stopwatch" color={color} size={size} />
          ),
        })}/>
      {/* <Tab.Screen name="Manage" component={TaskManager} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        })}/> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    container:{
        borderTopWidth: 0,
    }
});

export default Tabs;
