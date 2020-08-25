import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VideosScreen from "../screens/VideosScreen.js";
import { colors } from "../helpers/colors.js";

const Stack = createStackNavigator();

const VideosStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Videos"
        component={VideosScreen}
        initialParams={{ color: colors.white }}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: "",
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default VideosStack;
