import {React,useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ProgressBar, MD3Colors } from "react-native-paper";
import GlobalFont from 'react-native-global-font'

const FlashCards = ({}) => {
  
  return (
    // <View style={styles.containerFlashCard}>
    //   <View
    //     style={[styles.containerFlashCardChild, styles.iphone1313Position]}
    //   />
    //   <Text style={[styles.text, styles.textFlexBox]}>3/14</Text>
    //   <AntDesign
    //     name="arrowright"
    //     style={{ color: "white", fontSize: 40, top: 155, left: 315 }}
    //   />
    //   <AntDesign
    //     name="arrowleft"
    //     style={{ color: "white", fontSize: 40, top: 115, left: 20 }}
    //   />
    //   <FontAwesome5
    //     name="smile-beam"
    //     style={{ color: "white", fontSize: 40, top: 80, left: 170 }}
    //   />
    //   <Text style={[styles.tapTheCardToFlipIt, styles.textFlexBox]}>
    //     Tap the Card to view answers
    //   </Text>
    //   <View
    //     style={[styles.containerFlashCardItem, styles.iphone1313Position]}
    //   />

    //   <View style={styles.containerFlashCardInner} />
    //     <Text style={styles.question1}>Question 1</Text>
    //   <Text style={[styles.loremIpsumDolorSitAmetCo, styles.question1Typo]}>
    //     What color is an orange?
    //   </Text>
    // </View>
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
        <AntDesign name="arrowleft" color={"white"} size={24} />
        <Text
          style={{
            paddingVertical: "5%",
            textAlign: "center",
            color: "white",
            fontSize: 24,
          }}
        >
          3/15
        </Text>
        <AntDesign name="arrowright" color={"white"} size={24} />
      </View>
      <ProgressBar progress={0.3} color={MD3Colors.primary40} />
      <View
        style={{
          marginTop: "10%",
          flex: 0.7,
          backgroundColor: "#dabcf9",
          width: "80%",
          marginLeft: "10%",
          marginBottom: "10%",
          borderRadius: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, paddingVertical: "5%" }}>Question 1</Text>
        <Text style={{ fontSize: 16, paddingVertical: "15%" }}>
          What Color is an Orange?
        </Text>
      </View>
      <Text
        style={{
          marginBottom: "20%",
          color: "white",
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Tap Card to see answers
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

  autoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightsearchLayout: {
    height: 28,
    width: 28,
  },
  iphone1313Position: {
    height: 20,
    top: 113,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: "white",
    position: "absolute",
  },
  // question1Typo: {
  //   textAlign: "center",
  //   lineHeight: 29,
  //   position: "absolute",
  // },

  unionIcon: {
    width: 29,
    height: 27,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "66.67%",
    width: "53.92%",
    top: "18.33%",
    right: "22.75%",
    bottom: "15%",
    left: "23.33%",
  },
  typelogoDefaultComponentl: {
    width: 32,
    height: 32,
    display: "none",
  },
  autoLayoutHorizontal: {
    flex: 1,
  },
  iconlylightsearch: {
    display: "none",
  },
  autoLayoutHorizontal1: {
    justifyContent: "flex-end",
  },
  containerFlashCardChild: {
    left: 10,
    backgroundColor: "#dabcf9",
    width: 400,
  },
  text: {
    top: 76,
    fontWeight: "700",
    lineHeight: 29,
    textAlign: "center",
    left: 173,
  },
  tapTheCardToFlipIt: {
    fontFamily: "Poppins",
    top: "85%",
    left: "25%",
  },
  containerFlashCardItem: {
    left: 0,
    backgroundColor: "#c290e9",
    width: 120,
  },
  containerFlashCardInner: {
    top: 220,
    left: 22,
    borderRadius: 20,
    backgroundColor: "#e4daff",
    width: 329,
    height: 454,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  question1: {
    top: "25%",
    left: "38%",
    fontSize: 20,
    fontFamily: "Poppins",
  },
  loremIpsumDolorSitAmetCo: {
    fontFamily: "Poppins",
    top: "35%",
    left: "23%",
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  vectorIcon1: {
    height: "5.33%",
    width: "11.54%",
    top: "19.19%",
    right: "3.85%",
    bottom: "75.47%",
    left: "84.62%",
  },
  gridiconscrossCircle: {
    top: 157,
    left: 19,
    width: 55,
    height: 55,
    position: "absolute",
    overflow: "hidden",
  },
  containerFlashCard: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: "#212121",
    fontFamily: "Poppins",
  },
});

export default FlashCards;

/*import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";



const styles = StyleSheet.create({
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml20: {
    marginLeft: GlobalStyles.Margin.margin_lg,
  },
  ml12: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  autoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightsearchLayout: {
    height: 28,
    width: 28,
  },
  iphone1313Position: {
    height: 20,
    top: 113,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: GlobalStyles.Color.white,
    position: "absolute",
  },
  question1Typo: {
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.dMSans,
    textAlign: "center",
    lineHeight: 29,
    fontSize: GlobalStyles.FontSize.h4Bold_size,
    position: "absolute",
  },
  iconsaxlinearhome3: {
    left: 37,
    height: 31,
    width: 33,
    top: 763,
    position: "absolute",
    overflow: "hidden",
  },
  iconsaxlineartasksquare: {
    left: 173,
    height: 31,
    width: 33,
    top: 763,
    position: "absolute",
    overflow: "hidden",
  },
  unionIcon: {
    width: 29,
    height: 27,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_xs,
    backgroundColor: GlobalStyles.Color.gradientsGradientBlue,
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "66.67%",
    width: "53.92%",
    top: "18.33%",
    right: "22.75%",
    bottom: "15%",
    left: "23.33%",
  },
  typelogoDefaultComponentl: {
    borderRadius: GlobalStyles.Border.br_3xl,
    width: 32,
    height: 32,
    display: "none",
  },
  autoLayoutHorizontal: {
    flex: 1,
  },
  iconlylightsearch: {
    display: "none",
  },
  autoLayoutHorizontal1: {
    justifyContent: "flex-end",
  },
  themedarkComponentnavbar: {
    top: 28,
    left: 5,
    width: 380,
    height: 48,
    paddingHorizontal: 0,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    position: "absolute",
  },
  containerFlashCardChild: {
    left: -4,
    backgroundColor: "#dabcf9",
    width: 400,
  },
  text: {
    top: 76,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.h6Bold,
    lineHeight: 29,
    fontSize: GlobalStyles.FontSize.h4Bold_size,
    textAlign: "center",
    color: GlobalStyles.Color.white,
    left: 173,
  },
  tapTheCardToFlipIt: {
    top: 695,
    left: 79,
    fontSize: GlobalStyles.FontSize.h5Bold_size,
    lineHeight: 24,
    fontFamily: GlobalStyles.FontFamily.poppins,
    width: 235,
    height: 44,
  },
  containerFlashCardItem: {
    left: 0,
    backgroundColor: "#c290e9",
    width: 120,
  },
  containerFlashCardInner: {
    top: 220,
    left: 29,
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: "#e4daff",
    width: 329,
    height: 454,
    position: "absolute",
  },
  question11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine: {
    margin: 0,
  },
  question1: {
    top: 315,
    left: 136,
  },
  loremIpsumDolorSitAmetCo: {
    marginTop: -58,
    marginLeft: -108,
    top: "50%",
    left: "50%",
    width: 210,
  },
  vectorIcon1: {
    height: "5.33%",
    width: "11.54%",
    top: "19.19%",
    right: "3.85%",
    bottom: "75.47%",
    left: "84.62%",
  },
  gridiconscrossCircle: {
    top: 157,
    left: 19,
    width: 55,
    height: 55,
    position: "absolute",
    overflow: "hidden",
  },
  containerFlashCard: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default containerFlashCard;
*/
