import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Tabs from "./navigation/tabs";
import * as SplashScreen from 'expo-splash-screen';
import Homepage from "./screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Urbanist: require("./assets/fonts/Urbanist-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}


