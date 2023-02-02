import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, TextInput } from "react-native";
import moment from 'moment';


const Clock = () => {
    const [duration, setDuration] = useState(60 * 30);
    const [intervalId, setIntervalId] = useState(null);
    const [timerRunning, setTimerRunning] = useState(false);
    const [adv, setADV] = useState(false);
    const [change, setChange] = useState("");
    const [totalTime, setTotalTime] = useState(0);

    let time = "00:00";

    const startTimer = () => {
        setTimerRunning(true);
        setIntervalId(
            setInterval(() => {
                if (duration <= 0) {
                    clearInterval(intervalId);
                    setTimerRunning(false);
                } else {
                    setDuration(duration => duration - 1);
                    setTotalTime(totalTime => totalTime + 1);
                }
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

    const handleChange = () => {
        const duration = parseInt(change) * 60;
        setDuration(duration);
        setADV(false)
    };

    time = "00:00";
    let mins = 0;
    if (duration > 0) {
        mins = Math.floor(duration / 60);
        mins = mins < 10 ? `0${mins}` : `${mins}`;
        let secs = (duration - mins * 60);
        secs = secs < 10 ? `0${secs}` : `${secs}`;
        time = `${mins}:${secs}`;
    }

    const totalTimeDisplay = moment.duration(totalTime, 'seconds');
    const hours = Math.floor(totalTimeDisplay.asHours());
    const minutes = totalTimeDisplay.minutes();

    return (
        <View>
            <View style={styles.set}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => setDuration(duration - 60)}
                >
                    <Text style={styles.icons}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setADV(true)}>
                    <Text style={styles.timer}>{time}</Text>
                </TouchableOpacity>

                {adv === true ? (
                    <View style={styles.popup}>
                        <Modal
                        style={styles.modalContainer}
                        animationType="fade"
                        visible={adv}
                        transparent={true}
                        onRequestClose={() => setADV(false)}
                        >
                            <View style={styles.color}>
                                <Text style={styles.modalHeader}>Set new duration</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.modalText}>New duration: </Text>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={change}
                                        onChangeText={text => setChange(text)}
                                        placeholder="30"
                                        placeholderTextColor="grey"
                                        />
                                    <Text style={styles.modalText}>mins</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={() => setADV(false)} style={[styles.b1, {justifyContent: 'center', alignItems: 'center'}]}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={handleChange} style={[styles.b2, {justifyContent: 'center', alignItems: 'center'}]}><Text style={styles.buttonText}>Change</Text></TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ):(
                    <View></View>
                )}

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => setDuration(duration + 60)}
                >
                    <Text style={styles.icons}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.details}>{hours}h {minutes}m</Text>
            <TouchableOpacity style={styles.starter} onPress={timerRunning ? stopTimer : startTimer}>
                <Text style={styles.stfont}>{timerRunning ? 'Stop' : 'Start'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    set: {
        alignItems: "center",
        top: Dimensions.get("screen").height * 0.25,
        flexDirection: "row",
        justifyContent: "space-around",
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
        // marginTop: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        top: (Dimensions.get("screen").height * 0.27),
        backgroundColor: "#FEB47B",
        borderRadius: 90,
        alignSelf: "center",
        // position: "absolute",
    },
    stfont: {
        fontSize: 20,
        color: "white",
    },
    timer: {
        color: "white",
        fontSize: 90,
    },
    // Modal
    range: {
        color: "white",
        fontSize: 25,
        top: (Dimensions.get("screen").height * 0.25),
        alignSelf: "center",
        // top: "55%",
        // left: "30%",
    },
    color: {
        backgroundColor: "#222",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        top: (Dimensions.get("screen").height * 0.40),
        left: (Dimensions.get("screen").width * 0.05),
        height: (Dimensions.get("screen").height * 0.25),
        width: (Dimensions.get("screen").width * 0.9),
    },
    modalHeader: {
        color: "white",
        paddingTop: "5%",
        paddingLeft: "5%",
        fontSize: 40,
    },
    modalText: {
        color: "white",
        paddingTop: "5%",
        paddingLeft: "5%",
        fontSize: 27,
    },
    input: {
        backgroundColor: "#222",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        top: (Dimensions.get("screen").height * 0.02),
        width: (Dimensions.get("screen").width * 0.1),
        color: "white",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    b1 : {
        left: (Dimensions.get("screen").width * 0.05),
        backgroundColor: "#8758FF",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: (Dimensions.get("screen").width * 0.05),
    },
    b2 : {
        left: (Dimensions.get("screen").width * 0.2),
        backgroundColor: "#FEB47B",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: (Dimensions.get("screen").width * 0.05),
    },
    details: {
        color: "white",
        top: (Dimensions.get("screen").height * 0.25),
        alignSelf: "center",
    },
})

export default Clock