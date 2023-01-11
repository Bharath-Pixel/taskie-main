import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

const welcome = ({navigation}) => { 
    return(
        <View style={styles.container}>
            <View style={styles.buffer}>
                <Text style={styles.header}>Taskie</Text>
                <Text style={styles.subheader}>Welcome to taskie, login or sign up if you're new to use the app</Text>
                <TouchableOpacity style={styles.b1}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.b2}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default welcome;

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
        top:"25%",
    },
    b2: {
        backgroundColor: "#8758FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 15,
        top:"30%",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    }
});