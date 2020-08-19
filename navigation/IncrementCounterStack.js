import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import IncrementCounterScreen from "../screens/IncrementCounterScreen.js"

const Stack = createStackNavigator();

const IncrementCounterStack= ({ navigation, route })=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={IncrementCounterScreen}
        initialParams={{color:"white"}}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor: "#feffff",
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export default IncrementCounterStack;
