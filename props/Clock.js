import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function Clock(props) {
    let [duration, setSeconds] = useState(60*30);
    let [start, click] = useState(3);
    let mins = Math.floor(duration / 60);
    let secs = (duration-mins*60);
    let time = mins + ":" + secs

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (start%2==0) {
    //             setSeconds(duration => duration - 1);
    //             mins = Math.floor(duration / 60);
    //             secs = (duration-mins*60);
    //             time = mins + ":" + secs
    //         }
    //         console.log(start);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);


    return(
        <>
            <View style={[styles.set]}>
                <TouchableOpacity style={[styles.buttons]} onPress={() => setSeconds(duration-60)}>
                    <Text style={[styles.icons]}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.timer]}>{time}</Text>
                <TouchableOpacity style={[styles.buttons]} onPress={() => setSeconds(duration+60)}>
                    <Text style={[styles.icons]}>+</Text>
                </TouchableOpacity>
            </View> 
            <Text style={styles.range}>16:25 - 16:55</Text>
            <TouchableOpacity style={[styles.starter]} onPress={() => click(start+1)}>
                <Text style={[styles.stfont]}> Start</Text>
            </TouchableOpacity>

        </>
    )
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
        color: "black",
        fontSize: 30,
    },
    buttons: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: "white",
        borderRadius: 90,
    },
    starter: {
        top: "10%",
        left: "40%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 90,
        top: 220,
        width: "20%",
    },
    stfont:{
        fontSize: 20,
    },
    timer: {
        color: "white",
        fontSize: 100,
    },
    range: {
        color: "white",
        fontSize: 25,
        top: "28%",
        left: "30%",
    }
})

export default Clock