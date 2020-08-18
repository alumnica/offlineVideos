// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorOne from "./StackNavigatorOne.js";
import StackNavigatorTwo from "./StackNavigatorTwo.js";
import TabBarIcon from "../components/TabBarIcon";

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "#121a21",
            borderTopWidth: 0,
          },
        }}
      >
        <BottomTab.Screen
          name="Adjust"
          component={StackNavigatorOne}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="atom" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Braille"
          component={StackNavigatorTwo}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="code" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
