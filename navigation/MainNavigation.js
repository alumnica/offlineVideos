// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IncrementCounterStack from "./IncrementCounterStack.js";
import DecrementCounterStack from "./DecrementCounterStack.js";
import TabBarIcon from "../components/TabBarIcon";
import { StatusBar } from 'expo-status-bar';

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
          component={IncrementCounterStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="atom" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Braille"
          component={DecrementCounterStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="code" />
            ),
          }}
        />
      </BottomTab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default MainNavigation;
