import React from "react";
import { StyleSheet, Text, View, Image, Alert,Animated,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homepage from "../screens/Homepage";
import CreateTasks from "../screens/CreateTasks";
import FlashCards from "../screens/Flashcards";
import Progresspage from "../screens/ProgressPage";
import TaskManager from "../screens/Taskmanager";

const Tab= createBottomTabNavigator();

const Tabs = () => {
return(
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            showLabel: true,
            tabBarInActiveBackgroundColor:'#212121'
        }}
    >
        <Tab.Screen name="Home" component={Homepage}/>
        <Tab.Screen name="Create" component={CreateTasks}/>
        <Tab.Screen name="Flashcards" component={FlashCards}/>
        <Tab.Screen name="Progress" component={Progresspage}/>
        <Tab.Screen name="Manage" component={TaskManager}/>
    </Tab.Navigator>
)

}

const style= StyleSheet.create({
    shadow:{
        
    }

})

export default Tabs;