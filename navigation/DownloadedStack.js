import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DownloadedScreen from "../screens/DownloadedScreen.js";
import {colors} from "../helpers/colors.js"

const Stack = createStackNavigator();

const DownloadedStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Downloaded"
        component={DownloadedScreen}
        initialParams={{ color: colors.white }}
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

export default DownloadedStack;
