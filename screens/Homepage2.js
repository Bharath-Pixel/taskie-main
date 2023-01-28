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

const DATA = [
  {
    id: 1,
    content: "FOP",
  },
  {
    id: 2,
    content: "BED",
  },
  {
    id: 3,
    content: "JPRG",
  },
];

const Item = ({ item }) => {
  return (
    <View
      style={{ flex: 1,paddingHorizontal: 10, width: "auto" }}
    >
      <View
        style={{
          minHeight: 10,
          flexDirection: "row",
          backgroundColor: "#5A5A5A",
          borderRadius: 15,
          justifyContent: "space-around",
          paddingVertical:"10%",
          width: "auto",
          alignItems: "center",
          marginBottom: 20,
          paddingLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 13,color:"white"}}>{item.content}</Text>
        <Text style={{ fontSize: 13, color:"white" }}>{">>"}</Text>
      </View>
    </View>
  );
};

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
      <Text
        style={{
          fontSize: 30,
          paddingVertical: "10%",
          color: "white",
          textAlign: "center",
          paddingHorizontal: "10%",
          fontFamily:"Poppins"
        }}
      >
        In progress :
      </Text>
      <View
        style={{
          flex: 1 / 10,
          flexDirection: "row",
          paddingHorizontal: "10%",
          justifyContent: "flex-start",
          paddingBottom: "20%",
        }}
      >
          <FlatList
          maxToRenderPerBatch={1}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          style={{ marginTop: 10,height: 500, width: "80%" ,fontFamily:"Poppins"}}
          renderItem={({ item }) => <Item item={item} />}
        />
        
      </View>
      {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          borderRadius: 50,
          backgroundColor: "#FEB47B",
          width: "17%",
          height: "10%",
          paddingRight:"2%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="book"
          color={"black"}
          size={24}
          style={{ paddingLeft: "30%" }}
        />
      </TouchableOpacity> */}
     
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