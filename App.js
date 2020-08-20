//Navigation, react-native-gesture-handler must be imported at the top of the doc either here or at index.js
import "react-native-gesture-handler";
import MainNavigation from "./navigation/MainNavigation.js";
//React and React Native
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
//Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";
//Custom
import Loading from "./components/Loading.js";
import { colors } from "./helpers/colors.js";
//Expo
import { StatusBar } from "expo-status-bar";
import { useFonts, Poppins_200ExtraLight } from "@expo-google-fonts/poppins";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
//Creates Store
const store = configureStore({
  reducer: rootReducer,
});

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  let [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    Poppins_200ExtraLight,
  });
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      setLoadingComplete(true);
    }
  }, [fontsLoaded]);

  if (isLoadingComplete) {
    return (
      <Provider store={store}>
          <MainNavigation />
          <StatusBar style="light" />
      </Provider>
    );
  } else {
    return <Loading />;
  }
};

export default App;
