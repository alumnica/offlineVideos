import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IncrementCounterScreen from "../screens/IncrementCounterScreen.js";
import { colors } from "../helpers/colors.js";

const Stack = createStackNavigator();

const IncrementCounterStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={IncrementCounterScreen}
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

export default IncrementCounterStack;
