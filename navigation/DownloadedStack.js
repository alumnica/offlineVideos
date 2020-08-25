import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DownloadedScreen from "../screens/DownloadedScreen.js";
import {colors} from "../helpers/colors.js"

const Stack = createStackNavigator();

const DownloadedStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DownloadedScreen}
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

export default DownloadedStack;
