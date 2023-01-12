import * as React from "react";
import { StyleSheet, Text, View, Image, Alert,Animated,TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';
import { Agenda } from "react-native-calendars";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab= createBottomTabNavigator();

const Homepage = () => {
  return (

    <View style={styles.container}>
      <View style={styles.buffer}>
        <Text style={[styles.sectionTitle]}>Taskie</Text>
        <View style={styles.projectbg}></View>
        <View style={styles.quizzesbg}></View>
        <View style={styles.addTasksbg}>
          <AntDesign name='plus' style={{ color: 'white', fontSize: 25,left:8, }}/>
        </View>
        <Text style={[styles.projects]}>Projects</Text>
        <Text style={[styles.quizzes]}>Quizzes</Text>
        <Text style={styles.progressiontxt}>In progress :</Text>
        <View style={styles.bedbg}></View>
        <View style={styles.fopbg}></View>
        <Text style={[styles.bED, styles.bedTypo, styles.bedTypo1]}>BED   {'>>'}</Text>
        <Text style={[styles.fOP, styles.bedTypo, styles.bedTypo1]}>FOP   {'>>'}</Text>
        <Image
          style={[styles.progressbarIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/images/progressbar1.png")}
        />
        <Image
          style={[styles.progressbarIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/images/progressbar2.png")}
        />
        <View style={styles.flashcardsbg}>
          <Text style={[styles.flashCards]}>
            Flash cards
          </Text>
          <Text style={[styles.testYourKnowledgeHere, styles.bedTypo]}>
            Test your knowledge here {'>>'}
          </Text>
          <Image
            style={[styles.iconsaxLinearbook1, styles.flashCardsPosition]}
            resizeMode="cover"
            source={require("../assets/images/flashcardBookIcon.png")}
          />
        </View>
        
        <Text
          style={[styles.upcomingDeadlines, styles.bedTypo1, styles.taskieTypo]}
        >
          Upcoming deadlines
        </Text>
        <View style={styles.upcomingDeadlinesbg}>
          <Text style={[styles.fOP1]}>FOP</Text>
          <View style={styles.verticleLine}></View>
          <Text style={[styles.deadlineDate]}>22 August 2022</Text>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#212121",
  },
  container1: {
    left:25,
    top:30,
    backgroundColor:"#212121",
  },
  buffer: { // provides buffer
    top: "8%",
    left: "5%",
    width: "90%",
    height:'95%',
    backgroundColor:"#212121",
  },
  sectionTitle: {
    top:10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins",
  },
  progressiontxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins",
    bottom: 95,
  },
  projectbg: {
    backgroundColor: "#8758FF",
    width: 110,
    height: 40,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  quizzesbg: {
    backgroundColor: "#8758FF",
    left: 125,
    bottom: 63,
    width: 110,
    height: 40,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  addTasksbg: {
    backgroundColor: "#8758FF",
    left: 250,
    bottom: 127,
    width: 40,
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  projects: {
    position: "absolute",
    left: 20,
    top: 72,
    paddingBottom: 100,
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 78,
    height: 20,
  },
  quizzes: {
    position: "absolute",
    left: 147,
    top: 74,
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#fffefe",
    textAlign: "left",
    width: 78,
    height: 20,
  },
  bedbg: {
    backgroundColor: "#A07AFF",
    bottom: 90,
    width: 129,
    height: 170,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  fopbg: {
    backgroundColor: "#A07AFF",
    left: 158,
    bottom: 285,
    width: 129,
    height: 170,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  bED: {
    position: "absolute",
    top: 230,
    left: 23,
    fontSize: 20,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 98,
    height: 35,
  },
  fOP: {
    position: "absolute",
    top: 230,
    left: 181,
    fontSize: 20,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 98,
    height: 35,
  },
  flashcardsbg: {
    backgroundColor: "#FEB47B",
    bottom: 275,
    width: "100%",
    height: 100,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  upcomingDeadlinesbg: {
    backgroundColor: "#A07AFF",
    bottom: 245,
    width: "100%",
    height: 70,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  verticleLine: {
    height: 70,
    width: 1,
    backgroundColor: '#000000',
  },
  fOP1: {
    position: "absolute",
    top: "30%",
    left: "10%",
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign: "center",
    width: 98,
  },
  deadlineDate: {
    position: "absolute",
    top: "30%",
    left: "35%",
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign: "center",
    width: 300,
  },

  rectangleIcon1: {
    position: "absolute",
    top: 111,
    left: 136,
    borderRadius: 30,
    width: 118,
    height: 43,
  },
  rectangleView: {
    position: "absolute",
    top: 167,
    left: 21,
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 129,
    height: 170,
  },
  rectangleView1: {
    position: "absolute",
    top: 167,
    left: 166,
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 129,
    height: 170,
  },
  upcomingDeadlines: {
    position: "absolute",
    top: 535,
    left: 21,
    fontSize: 20,
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "left",
    width: 289,
    height: 28,
  },
  rectangleView2: {
    position: "absolute",
    top: 539,
    left: 21,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 330,
    height: 70,
  },

  progressbarIcon: {
    position: "absolute",
    top: 275,
    left: 25,
    width: 80,
    height: 80,
  },
  progressbarIcon1: {
    position: "absolute",
    top: 275,
    left: 182,
    width: 80,
    height: 80,
  },
  flashCards: {
    position: "absolute",
    top: "25%",
    left: 25,
    fontSize: 24,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 153,
    height: 35,
  },
  testYourKnowledgeHere: {
    position: "absolute",
    top: "55%",
    left: 25,
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "left",
    width: 279,
    height: 32,
  },
  iconsaxLinearbook1: {
    position: "absolute",
    top: "30%",
    left: "80%",
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  homepage: {
    position: "relative",
    backgroundColor: "#212121",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Homepage;


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

// const Homepage = () => {
//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           fontSize: 36,
//           paddingTop: "20%",
//           color: "white",
//           textAlign: "left",
//           paddingHorizontal: "10%",
//         }}
//       >
//         Taskie
//       </Text>
//       <View
//         style={{
//           flex: 1 / 5,
//           flexDirection: "row",
//           paddingHorizontal: "10%",
//           justifyContent: "flex-start",
//         }}
//       >
//         <TouchableOpacity style={styles.projectbg}>
//           <Text styles={{fontFamily:"Poppins",fontSize: 25}}>Projects</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.projectbg}>
//           <Text>Quizzes</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.addTasksbg}>
//         <AntDesign name='plus' style={{  fontSize: 25 }}/>
//         </TouchableOpacity>
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

// export default Homepage;