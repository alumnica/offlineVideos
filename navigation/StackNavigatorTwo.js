import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import StackScreenExampleTwo from "../screens/StackScreenExampleTwo.js";

const Stack = createStackNavigator();

const StackNavigatorTwo = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={StackScreenExampleTwo}
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

export default StackNavigatorTwo;
