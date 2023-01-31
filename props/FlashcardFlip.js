import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={flip}>
        <View style={styles.cardFlip}>
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
          </View>
          <Text style={styles.text}>
            {isFlipped ? props.answer : props.question}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Poppins",
  },
  cardFlip: {
    height: "auto",
  },
};

export default Flashcard;
