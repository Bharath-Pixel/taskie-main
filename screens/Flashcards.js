import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FlashCards = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.flashcardsTxt}>Flashcards Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button style={styles.goBack}
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default FlashCards;

const styles = StyleSheet.create({
  flashcardsTxt:{
    color:'white'
  },
  container: {
    flex: 1, 
    justifyContent:'center',
    backgroundColor:"#212121",
  },
  goBack:{
    position:"absolute",
    top:20,
  },

});


