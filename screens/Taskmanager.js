import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskManager = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text> Task manager Screen</Text>
        <Button
            title="Joemama"
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

export default TaskManager;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:"#212121",
  },
});