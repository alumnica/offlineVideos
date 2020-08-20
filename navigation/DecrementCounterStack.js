import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DecrementCounterScreen from "../screens/DecrementCounterScreen.js";
import {colors} from "../helpers/colors.js"

const Stack = createStackNavigator();

const DecrementCounterStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DecrementCounterScreen}
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

export default DecrementCounterStack;
