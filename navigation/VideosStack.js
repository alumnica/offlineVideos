import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VideosScreen from "../screens/VideosScreen.js";
import VideoScreen from "../screens/VideoScreen.js";
import { colors } from "../helpers/colors.js";

const Stack = createStackNavigator();

const VideosStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          headerBackTitleVisible: false,
          animationEnabled: true,
          headerStyle: {
            backgroundColor: colors.black,
            shadowColor: "transparent",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: colors.white,
            fontFamily: "DMSerifDisplay_400Regular",
            fontSize: 28,
          },
        }}
      />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{
            headerBackTitleVisible: false,
            animationEnabled: true,
            headerStyle: {
              backgroundColor: colors.black,
              shadowColor: "transparent",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: colors.white,
              fontFamily: "DMSerifDisplay_400Regular",
              fontSize: 28,
            },
          }}
        />
    </Stack.Navigator>
  );
};

export default VideosStack;
