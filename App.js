import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Tabs from "./navigation/tabs";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import { AppContextProvider } from "./context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Urbanist: require("./assets/fonts/Urbanist-Regular.ttf"),
  });

  useEffect(() => {
    async function preventAutoHide() {
      await SplashScreen.preventAutoHideAsync();
    }
    preventAutoHide();
  }, []);

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function hideSplash() {
      if (isLoadingComplete) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [isLoadingComplete]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AppContextProvider>
        <AuthNavigator onLoadingComplete={() => setLoadingComplete(true)} />
      </AppContextProvider>
      {/* <Tabs/> */}
    </NavigationContainer>
  );
}
