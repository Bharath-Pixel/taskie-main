import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

const signup = ({navigation}) => { 
    return(
        <View style={styles.container}>
            <View style={styles.buffer}>
                <Text style={styles.header}>Sign Up</Text>
                <Text style={styles.subheader}>Welcome to Taskie!</Text>
                <TextInput style={styles.t1} placeholderTextColor= "white" placeholder={'Email'}>
                </TextInput>
                <TextInput style={styles.t2} placeholderTextColor= "white" placeholder={'Name'}>
                </TextInput>
                <TextInput style={styles.t3} placeholderTextColor= "white" placeholder={'Username'}>
                </TextInput>
                <TextInput style={styles.t4} placeholderTextColor= "white" placeholder={'Password'}>
                </TextInput>
                <TextInput style={styles.t5} placeholderTextColor= "white" placeholder={'Retype Password'}>
                </TextInput>
                <TouchableOpacity style={styles.b1}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default signup;

const styles = StyleSheet.create({
    container: {  // the whole screen
        flex: 1, 
        backgroundColor:"#212121",
    },
    buffer: { // provides buffer
        top: "8%",
        left: "5%",
        width: "90%",
        height:'90%',
        backgroundColor:"#212121",
        alignContent: "center",
        // justifyContent: "center",
    },
    header: {
        fontSize: 50,
        color: "white",
    },
    subheader: {
        fontSize: 20,
        color: "white",
    },
    b1: {
        backgroundColor: "#FEB47B",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"35%",
    },
    t1: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"20%",
        paddingLeft: "5%",
        color: "white",
    },
    t2: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"23%",
        paddingLeft: "5%",
        color: "white",
    },
    t3: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"26%",
        paddingLeft: "5%",
        color: "white",
    },
    t4: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"29%",
        paddingLeft: "5%",
        color: "white",
    },
    t5: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"32%",
        paddingLeft: "5%",
        color: "white",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    }, 
    fp: {
        color: "red",
        top:"31%",
    }
});