
// import * as React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Alert,
//   Animated,
//   TouchableOpacity,
// } from "react-native";
// import Svg, { Circle, Path } from "react-native-svg";
// import { NavigationContainer } from "@react-navigation/native";
// import { Agenda } from "react-native-calendars";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { FlatList } from "react-native-gesture-handler";

// const Tab = createBottomTabNavigator();

// const DATA = [
//   {
//     id: 1,
//     content: "FOP",
//   },
//   {
//     id: 2,
//     content: "BED",
//   },
//   {
//     id: 3,
//     content: "JPRG",
//   },
// ];

// const Item = ({ item }) => {
//   return (
//     <View
//       style={{ flex: 1, paddingHorizontal: 10, height: "100%", width: "35%" }}
//     >
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           backgroundColor: "white",
//           borderRadius: 15,
//           justifyContent: "space-around",
//           width: 100,
//           alignItems: "center",
//           paddingLeft: "10%",
//         }}
//       >
//         <Text style={{ fontSize: 18 }}>{item.content}</Text>
//         <Text style={{ fontSize: 18 }}>{">>"}</Text>
//       </View>
//     </View>
//   );
// };

// const Homepage2 = () => {
//   return (
//     <View style={styles.container}>
//         <View style={styles.box}>
//       <Text
//         style={{
//           fontSize: 36,
//           paddingTop: "20%",
//           color: "white",
//           textAlign: "left",
//           paddingHorizontal: "10%",
//           fontFamily:"Poppins"
//         }}
//       >
//         Welcome
//       </Text>

//       </View>
//       <Text
//         style={{
//           fontSize: 30,
//           paddingVertical: "10%",
//           color: "white",
//           textAlign: "center",
//           paddingHorizontal: "10%",
//           fontFamily:"Poppins"
//         }}
//       >
//         In progress :
//       </Text>
//       <View
//         style={{
//           flex: 1 / 10,
//           flexDirection: "row",
//           paddingHorizontal: "10%",
//           justifyContent: "flex-start",
//           paddingBottom: "20%",
//         }}
//       >
//         <FlatList
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           data={DATA}
//           style={{ height: 60, width: "80%" ,fontFamily:"Poppins"}}
//           renderItem={({ item }) => <Item item={item} />}
//         />
        
//       </View>
//       <TouchableOpacity
//         style={{
//           flexDirection: "row",
//           borderRadius: 20,
//           backgroundColor: "#FEB47B",
//           width: "80%",
//           height: "10%",
//           marginLeft: "10%",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ fontSize: 24, paddingLeft: "5%", fontFamily:"Poppins" }}>FlashCards</Text>
//         <AntDesign
//           name="book"
//           color={"black"}
//           size={24}
//           style={{ paddingRight: "5%" }}
//         />
//       </TouchableOpacity>
//       <Text
//         style={{
//           fontSize: 24,
//           fontFamily:"Poppins",
//           paddingVertical: "5%",
//           color: "white",
//           textAlign: "left",
//           paddingHorizontal: "10%",
//         }}
//       >
//         Upcoming Deadlines :{" "}
//       </Text>
//       <TouchableOpacity
//         style={{
//           flexDirection: "row",
//           borderRadius: 20,
//           backgroundColor: "#d9d9d9",
//           width: "80%",
//           height: "10%",
//           marginLeft: "10%",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text style={{ fontSize: 24, paddingLeft: "5%",fontFamily:"Poppins" }}>FOP</Text>
//         <View style={styles.verticleLine}></View>
//         <Text style={{ fontSize: 24, paddingRight: "5%" }}>22 August 2022</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   base: {
//     backgroundColor: "#212121",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#212121",
//     justifyContent: 'flex-start',
//   },
  
// });

// export default Homepage2;

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
  ImageBackground
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";
import React from 'react';

export default function App() {
  StatusBar.setHidden(true);
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
         <Image
         style={styles.vectorIcon}
         resizeMode="cover"
         source={require("../assets/images/Vector.png")}></Image>
          <Text
        style={{
        position:"absolute",
          fontSize: 34,
          paddingTop: "25%",
          color: "white",
          textAlign: "left",
          paddingHorizontal: "8%",
          fontFamily:"Poppins"
        }}
      >
        Welcome To {"\n"}Taskie
      </Text>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#212121",
  },
  topWavy: {
 
  },
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
  },
  box: {
    backgroundColor: '#8758FF',
    height: "60%",
    shadowOpacity:1,
  },
})