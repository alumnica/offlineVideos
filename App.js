import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import MainNavigation from "./navigation/MainNavigation.js";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";

import Loading from "./components/Loading.js";
import {
  useFonts,
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from "@expo-google-fonts/dm-serif-display";
import { Poppins_200ExtraLight } from "@expo-google-fonts/poppins";

const store = configureStore({
  reducer: rootReducer,
});

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  let [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
    Poppins_200ExtraLight,
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
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  } else {
    return <Loading />;
  }
};

export default App;
