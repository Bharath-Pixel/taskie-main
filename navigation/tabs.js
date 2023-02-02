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
import CreateTasks from "../screens/CreateTasks";
import Pomo from "../screens/Pomo";
import Habits from "../screens/Habits";
import Search from "../screens/SearchTasks";
import Homepage from "../screens/Homepage2";
import FlashCards from "../screens/FlashcardScreens/Flashcards";
import Flashcards1 from "../screens/FlashcardScreens/Flashcards1";



const TimerStats = createNativeStackNavigator();

// function TimerStatsScreen() {
//   return (
//     <TimerStats.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <TimerStats.Screen name="PomoScreen" component={Pomo} />
//     </TimerStats.Navigator>
//   );
// }

const HomeScreenStack=createNativeStackNavigator();

function HomeScreenStackScreen() {
  return (
    <HomeScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeScreenStack.Screen name="HomepageScreen" component={Homepage} />
      <HomeScreenStack.Screen name="HabitsScreen" component={Habits} />
    </HomeScreenStack.Navigator>
  );
}


const HabitsScreenStack = createNativeStackNavigator();

function HabitsStackScreen({taskItems,setTaskItems}) {
  return (
    <HabitsScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HabitsScreenStack.Screen name="HabitsScreen" component={Habits} />
      <HabitsScreenStack.Screen name="SearchScreen" component={Search} />
      <HabitsScreenStack.Screen name="AddScreen" component={CreateTasks} initialParams={{
        taskItems: taskItems,
        // setTaskItems: setTaskItems
      }} />
    </HabitsScreenStack.Navigator>
  );
}

const FlashcardsDisplay = createNativeStackNavigator();

function FlashcardsScreenDisplay() {
  return (
    <FlashcardsDisplay.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FlashcardsDisplay.Screen name="FlashcardsScreen" component={FlashCards} />
      <FlashcardsDisplay.Screen name="FlashcardsScreen1" component={Flashcards1} />
    </FlashcardsDisplay.Navigator>
  );
}

const CustomTabBarButton=({children,onPress})=>(
  <TouchableOpacity style={{
    top:"-8%",
    justifyContent:"center",
    alignItems:'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width:60,
      height:60,
      borderRadius:35,
      backgroundColor:"#A07AFF"
    }}>{children}</View>

  </TouchableOpacity>
)


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [taskItems, setTaskItems] = React.useState([["SEX", "General", "1/31/2023 | Today"]])
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
        component={HomeScreenStackScreen}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Flashcards"
        component={FlashcardsScreenDisplay}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
         headerShown:false
        })}
      />

      <Tab.Screen
        name="Add"
        component={CreateTasks}
        options={({}) => ({
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" color={color} size={35} 
            // style={{paddingTop:"12%"}}
            />
          ),
          
          // tabBarButton:(props) =>(
          //   <CustomTabBarButton{...props}/>
          //   ),
        })}
      />

      <Tab.Screen
        name="Habits"
        style={{ Text: false }}
        component={HabitsStackScreen}
        initialParams={{
        taskItems: taskItems,
        // setTaskItems: setTaskItems
      }}
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
        component={Pomo}
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
