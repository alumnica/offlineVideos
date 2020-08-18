import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  DefaultScreen from "../screens/DefaultScreen.js";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DefaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
