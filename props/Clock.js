import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal, TextInput,Alert } from "react-native";
// import PushNotification from 'react-native-push-notification';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";

let total = 60*30;

const Clock = () => {
    const [duration, setDuration] = useState(60 * 30);
    const [intervalId, setIntervalId] = useState(null);
    const [timerRunning, setTimerRunning] = useState(false);
    const [adv, setADV] = useState(false);
    const [change, setChange] = useState("");
    const [totalTime, setTotalTime] = useState(0);
    const [notificationSent, setNotificationSent] = useState(false);

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
        total = duration
        setADV(false)
    };
    
    const reset = () => {
        setDuration(total);
        setNotificationSent(false);
    }

    time = "00:00";
    let mins = 0;
    if (duration > 0) {
        mins = Math.floor(duration / 60);
        mins = mins < 10 ? `0${mins}` : `${mins}`;
        let secs = (duration - mins * 60);
        secs = secs < 10 ? `0${secs}` : `${secs}`;
        time = `${mins}:${secs}`;
        // setNotificationSent(false);
    } 
    else{
        stopTimer()
        if (!notificationSent) {
            Alert.alert("Timer has finished!");
            // setNotificationSent(true);
        }
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
                        animationType="fade"
                        visible={adv}
                        transparent={true}
                        onRequestClose={() => setADV(false)}
                        >
                            <View style={styles.color}>
                                <Text style={styles.modalHeader}>Set new duration</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.modalText}>New duration: </Text>
                                    <View style={{paddingLeft:15 }} >
                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        value={change}
                                        onChangeText={text => setChange(text)}
                                        placeholder="30"
                                        placeholderTextColor="grey"
                                        />
                                        </View>
                                    <Text style={styles.modalText}>mins</Text>
                                </View>
                                <View style={{flexDirection: 'row',paddingTop:20}}>
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
            <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity style={styles.starter} onPress={timerRunning ? stopTimer : startTimer}>
                    <Text style={styles.stfont}>{timerRunning ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
                <View style={styles.space}></View>
                <TouchableOpacity style={styles.starter} onPress={reset}>
                    <Text style={styles.stfont}>Reset</Text>
                </TouchableOpacity>
            </View>
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
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#A07AFF",
        borderRadius: 90,
    },
    starter: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        top: (Dimensions.get("screen").height * 0.27),
        backgroundColor: "#FEB47B",
        borderRadius: 90,
        alignSelf: "center",
    },
    stfont: {
        fontSize: 20,
        color: "white",
        fontFamily: "Urbanist",
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
    },
    color: {
        backgroundColor: "#222",
        borderColor: "#A07AFF",
        borderWidth: 1,
        borderRadius: 10,
        top: (Dimensions.get("screen").height * 0.35),
        left: (Dimensions.get("screen").width * 0.05),
        height: (Dimensions.get("screen").height * 0.25),
        width: (Dimensions.get("screen").width * 0.9),
    },
    modalHeader: {
        color: "white",
        paddingTop: 20,
        fontSize: 30,
        fontFamily: "Poppins",
        textAlign: "center",
    },
    modalText: {
        color: "white",
        top: (Dimensions.get("screen").height * 0.02),
        paddingLeft: 20,
        fontSize: 22,
        fontFamily: "Poppins",
        textAlign: "center",
    },
    input: {
        backgroundColor: "#222",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        height: (Dimensions.get("screen").height * 0.04),
        top: (Dimensions.get("screen").height * 0.02),
        width: (Dimensions.get("screen").width * 0.13),
        color: "white",
        textAlign: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins",
        // top: (Dimensions.get("screen").height * 0.02),
    },
    b1 : {
        left: (Dimensions.get("screen").width * 0.10),
        paddingVertical: (Dimensions.get("screen").height * 0.015),
        backgroundColor: "#8758FF",
        borderRadius: 10,
        paddingHorizontal: (Dimensions.get("screen").width * 0.05),
        top: (Dimensions.get("screen").height * 0.03),
    },
    b2 : {
        left: (Dimensions.get("screen").width * 0.25),
        backgroundColor: "#FEB47B",
        paddingVertical: (Dimensions.get("screen").height * 0.01),
        borderRadius: 10,
        paddingHorizontal: (Dimensions.get("screen").width * 0.05),
        top: (Dimensions.get("screen").height * 0.03),
    },
    details: {
        color: "white",
        top: (Dimensions.get("screen").height * 0.25),
        alignSelf: "center",
    },
    space: {
        width: (Dimensions.get("screen").width * 0.05),
    }
})

export default Clock