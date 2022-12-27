import * as React from "react";
import { StyleSheet, Text, View, Image, Alert,Animated,TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg"; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab= createBottomTabNavigator();

const Homepage = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.buffer}>
      <Text style={[styles.sectionTitle]}>Taskie</Text>
      <View style={styles.projectbg}></View>
      <View style={styles.quizzesbg}></View>
      <View style={styles.addTasksbg}></View>
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
      <View style={styles.flashcardsbg}></View>
      <Text
        style={[styles.flashCards]}
      >
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
      <Text
        style={[styles.upcomingDeadlines, styles.bedTypo1, styles.taskieTypo]}
      >
        Upcoming deadlines
      </Text>
      <View style={styles.upcomingDeadlinesbg}><View style={styles.verticleLine}></View></View>
      <Text style={[styles.fOP1]}>FOP</Text>
      <Text style={[styles.deadlineDate]}>22 August 2022</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#212121",
  },
  buffer: {
    left:25,
    top:30,
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
    borderRadius: 30,
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
    borderRadius: 30,
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
    width: 313,
    height: 100,
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  upcomingDeadlinesbg: {
    backgroundColor: "#A07AFF",
    bottom: 245,
    width: 313,
    height: 70,
    borderRadius: 40,
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
    top: 590,
    left: 30,
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign: "center",
    width: 98,
  },
  deadlineDate: {
    position: "absolute",
    top: 580,
    left: 183,
    fontSize: 20,
    fontFamily: "Poppins",
    textAlign: "center",
    width: 98,
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
    top: 435,
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
    top: 465,
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
    top: 435,
    left: 240,
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

// const Homepage = () => {
//   return (
//     <View style={styles.homepage}>
//       <Text style={[styles.taskie, styles.taskieTypo]}>Taskie</Text>
//       <Image
//         style={[styles.homepageChild, styles.homepageLayout]}
//         resizeMode="cover"
//         source={require("../assets/rectangle-1.png")}
//       />
//       <Image
//         style={[styles.homepageItem, styles.homepageLayout]}
//         resizeMode="cover"
//         source={require("../assets/rectangle-1.png")}
//       />
//       <View style={[styles.homepageInner, styles.homepageInnerShadowBox]} />
//       <View style={[styles.rectangleView, styles.homepageInnerShadowBox]} />
//       <Text
//         style={[styles.upcomingDeadlines, styles.bedTypo1, styles.taskieTypo]}
//       >
//         Upcoming deadlines
//       </Text>
//       <View style={[styles.homepageChild1, styles.homepageChildShadowBox]} />
//       <View style={[styles.homepageChild2, styles.homepageChildShadowBox]} />
//       <Text style={[styles.projects, styles.quizzesTypo]}>Projects</Text>
//       <Text style={[styles.quizzes, styles.quizzesTypo]}>Quizzes</Text>
//       <Text style={[styles.bed, styles.bedTypo, styles.bedTypo1]}>BED</Text>
//       <Text style={[styles.fop, styles.bedTypo, styles.bedTypo1]}>FOP</Text>
//       <Text style={[styles.fop1, styles.fop1Typo]}>FOP</Text>
//       <Image
//         style={styles.ellipseIcon}
//         resizeMode="cover"
//         source={require("../assets/ellipse-1.png")}
//       />
//       <Image
//         style={styles.iconsaxlinearadd}
//         resizeMode="cover"
//         source={require("../assets/iconsaxlinearadd.png")}
//       />
//       <Text style={[styles.august2022, styles.augustTypo1]}>August 2022</Text>
//       <Text style={[styles.august20221, styles.augustTypo1]}>August 2022</Text>
//       <Image
//         style={[styles.groupIcon, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group-1436.png")}
//       />
//       <Image
//         style={[styles.homepageChild3, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group-1439.png")}
//       />
//       <View style={styles.homepageChild4} />
//       <Text style={[styles.cprQuiz, styles.fop1Typo]}>CPR Quiz</Text>
//       <View style={[styles.lineView, styles.lineViewLayout]} />
//       <View style={[styles.homepageChild5, styles.lineViewLayout]} />
//       <Text style={[styles.august20222, styles.augustTypo]}>
//         22 August 2022
//       </Text>
//       <Text style={[styles.august20223, styles.augustTypo]}>
//         31 August 2022
//       </Text>
//       <Image
//         style={[styles.iconsaxlinearhome3, styles.iconsaxlinearhome3Layout]}
//         resizeMode="cover"
//         source={require("../assets/iconsaxlinearhome3.png")}
//       />
//       <Image
//         style={[
//           styles.iconsaxlineartasksquare,
//           styles.iconsaxlinearhome3Layout,
//         ]}
//         resizeMode="cover"
//         source={require("../assets/iconsaxlineartasksquare.png")}
//       />
//       <Image
//         style={styles.unionIcon}
//         resizeMode="cover"
//         source={require("../assets/union.png")}
//       />
//       <Text
//         style={[styles.flashCards, styles.flashCardsPosition, styles.bedTypo]}
//       >
//         Flash cards
//       </Text>
//       <Text style={[styles.testYourKnowledgeHere, styles.bedTypo]}>
//         Test your knowledge here
//       </Text>
//       <Image
//         style={[styles.iconsaxlinearbook1, styles.flashCardsPosition]}
//         resizeMode="cover"
//         source={require("../assets/iconsaxlinearbook1.png")}
//       />
//     </View>
//   );
// };
