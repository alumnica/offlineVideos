import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import DecrementCounterScreen from "../screens/DecrementCounterScreen.js";

const Stack = createStackNavigator();

const DecrementCounterStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DecrementCounterScreen}
        initialParams={{ color: "white" }}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#feffff",
          headerTitle: "",
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default DecrementCounterStack;
