import {React,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ProgressBar, MD3Colors } from "react-native-paper";
// import GlobalFont from 'react-native-global-font'
import Flashcard from "../../props/FlashcardFlip";
import { useNavigation } from "@react-navigation/native";

const flashcards = [
  {  
      question: 'What is the capital of France?',
      answer: 'Paris'
  },
  // {
  //     question: 'What is the largest planet in our solar system?',
  //     answer: 'Jupiter'
  // },
  // // Add more flashcards here
]

const FlashCards = ({}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#212121",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1 / 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <AntDesign
         name="arrowleft" color={"#212121"} size={24} />
        <Text
          style={{
            paddingVertical: "5%",
            textAlign: "center",
            color: "white",
            fontSize: 24,
          }}
        >
          1/2
        </Text>
        <AntDesign 
        onPress={() =>
          navigation.navigate('FlashcardsScreen1')
        }
        name="arrowright" color={"white"} size={24} />
      </View>
      <ProgressBar progress={0.5} color={MD3Colors.primary40} />
      <View
        style={{
          marginTop: "12%",
          flex: 0.7,
          backgroundColor: "#dabcf9",
          width: "80%",
          marginLeft: "10%",
          marginBottom: "10%",
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        {/* <Text style={{ fontSize: 28,marginTop:"40%", paddingVertical: "5%",fontFamily:"Urbanist" }}>Question 1</Text>
        <Text style={{ fontSize: 18, paddingVertical: "15%",fontFamily:"Urbanist",textAlign:"center" }}>
          What Color is an Orange? 
        </Text> */}
        {flashcards.map((flashcard, index) => {
                return <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
            })}
      </View>
      <Text
        style={{
          marginBottom: "20%",
          color: "white",
          textAlign: "center",
          fontSize: 16,
          fontFamily:"Urbanist"
        }}
      >
        Tap Text to see answers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "Poppins",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  goBack: {
    position: "absolute",
    top: 20,
  },


});

export default FlashCards;

