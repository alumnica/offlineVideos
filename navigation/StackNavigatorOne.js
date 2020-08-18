import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import StackScreenExampleOne from "../screens/StackScreenExampleOne"

const Stack = createStackNavigator();

const StackNavigatorOne= ({ navigation, route })=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={StackScreenExampleOne}
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

export default StackNavigatorOne;
