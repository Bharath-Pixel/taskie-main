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
import Pomo from "../screens/Pomo";
import Habits from "../screens/Habits";
import stats from "../screens/stats";
import Welcome from "../screens/welcome";
import login from "../screens/login";
import signup from "../screens/signup";
import Search from "../screens/SearchTasks";

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
        tabBarActiveTintColor:"#A07AFF"
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
         
      <Tab.Screen name="Add" component={Pomo} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="pluscircle" color={color} size={40} />
          ),
        })} />
        <Tab.Screen name="Habits" style={{Text:false}} component={Habits} options={({}) => ({
          
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
          headerShown:false
        })}/>

      <Tab.Screen name="Search" component={Search} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        })}/>
        
      {/* <Tab.Screen name="Stats" component={stats} options={({}) => ({
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
