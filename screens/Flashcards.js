import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FlashCards = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Flashcards Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default FlashCards;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});


