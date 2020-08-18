import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation.js";

import Loading from "./components/Loading.js";
import {
  useFonts,
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from "@expo-google-fonts/dm-serif-display";
import { Poppins_300Light } from "@expo-google-fonts/poppins";


const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  let [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
    Poppins_300Light,
  });
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  React.useEffect(() => {
    if (fontsLoaded) {
      setLoadingComplete(true);
    }
  }, [fontsLoaded]);

  if (isLoadingComplete) {
    return (
        <MainNavigation />
    );
  } else {
    return <Loading />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default App;
