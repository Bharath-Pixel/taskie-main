import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Clock(props) {
  let [duration, setDuration] = useState(60 * 30);
  let [intervalId, setIntervalId] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
    setIntervalId(
      setInterval(() => {
        setDuration(duration => duration - 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (!timerRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [timerRunning]);

  let mins = Math.floor(duration / 60);
  let secs = (duration - mins * 60);
  let time = `${mins}:${secs}`;

  return (
    <View>
      <View style={[styles.set]}>
        <TouchableOpacity
          style={[styles.buttons]}
          onPress={() => setDuration(duration - 60)}
        >
          <Text style={[styles.icons]}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.timer]}>{time}</Text>
        <TouchableOpacity
          style={[styles.buttons]}
          onPress={() => setDuration(duration + 60)}
        >
          <Text style={[styles.icons]}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.range}>16:25 - 16:55</Text>
      <TouchableOpacity style={[styles.starter]} onPress={timerRunning ? stopTimer : startTimer}>
        <Text style={[styles.stfont]}>{timerRunning ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  set: {
    width: "100%",
    alignItems: "center",
    top: "55%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icons: {
    color: "white",
    fontSize: 30,
  },
  buttons: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#A07AFF",
    borderRadius: 90,
  },
  starter: {
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FEB47B",
    borderRadius: 90,
    alignSelf: "center",
  },
    stfont: {
        fontSize: 20,
        color: "white",
    },
    timer: {
        color: "white",
        fontSize: 90,
    },
    range: {
        color: "white",
        fontSize: 25,
        top: "55%",
        left: "30%",
    }
})

export default Clock