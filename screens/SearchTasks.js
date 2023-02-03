import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    content: "All Tasks/Projects",
  },
  {
    id: 2,
    content: "Quizzes",
  },
  {
    id: 3,
    content: "Projects",
  },
  {
    id: 4,
    content: "Tests",
  },
];

function Item({ item }) {
  const [active, setActive] = React.useState(0);
  return (
    <View style={{ padding: 8, paddingTop: 15 }}>
      <TouchableOpacity
        onPress={() => {
          if (active == 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
        style={active === 1 ? styles.btnActive : styles.btn}
      >
        <Text>{item.content}</Text>
      </TouchableOpacity>
    </View>
  );
}

function cardItem({ item }) {
  const [active, setActive] = React.useState(0);
  return (
    <View style={{ padding: 8, paddingTop: 15 }}>
      <TouchableOpacity
        onPress={() => {
          if (active == 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
        style={active === 1 ? styles.cardbtnActive : styles.cardbtn}
      >
        <Text>{cards.title}</Text>
        <Image>{cards.uri}</Image>
      </TouchableOpacity>
    </View>
  );
}
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  // const navigation = useNavigation();
  const navigation = useNavigation();
  let { card, cardText, cardImage, cardTitleText } = styles;
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.buffer}>
        <AntDesign
          onPress={() => navigation.navigate('HabitsScreen')}
          name="back"
          style={{ color: "white", fontSize: 30 }}
        />
        <Text style={[styles.sectionTitle]}>Explore</Text>
        <Searchbar
          style={[styles.searchbar]}  
          placeholder="Search..."
          placeholderTextColor="gray"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={cardTitleText}> Tasks </Text>
          <View style={{ flexDirection: "row" }}>
            <ScrollView>
              <TouchableOpacity style={card}>
                <Image
                  style={cardImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                ></Image>
                <Text style={cardText}> Study FOP </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={cardTitleText}> Flashcards </Text>
          <TouchableOpacity style={card}>
            <Image
              style={cardImage}
              source={{
                uri: "https://www.shutterstock.com/image-vector/hand-drawn-chemistry-vector-doodle-600w-744979486.jpg",
              }}
            ></Image>
            <Text style={cardText}> Chemistry </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    // the whole screen
    flex: 1,
    backgroundColor: "#212121",
  },
  buffer: {
    // provides buffer
    top: (Dimensions.get("screen").height * 0.08),
    left: (Dimensions.get("screen").width * 0.05),
    width: (Dimensions.get("screen").width * 0.9),
    height: (Dimensions.get("screen").height * 0.95),
    backgroundColor: "#212121",
  },
  sectionTitle: {
    // header
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 25,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
  },

  searchbar: {
    backgroundColor: "#3D3D3D",
    borderRadius: 10,
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 0.5,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#818589",
    borderColor: "#8758FF",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 10,
    marginTop: 5,
  },
  btnActive: {
    color: "white",
    alignItems: "center",
    backgroundColor: "#8758FF",
    borderColor: "#8758FF",
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 10,
    marginTop: 3,
  },
  cardText: {
    fontSize: 16,
    padding: 15,
    color: "#D3D3D3",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  cardTitleText: {
    fontSize: 24,
    padding: 15,
    color: "gray",
    fontFamily: "Poppins",
  },
  card: {
    backgroundColor: "#36454F",
    marginTop: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
    borderRadius: 20,
  },
  cardImage: {
    height: 200,
    resizeMode: "cover",
  },
});
