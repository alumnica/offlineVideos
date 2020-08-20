import * as React from "react";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Custom
import IncrementCounterStack from "./IncrementCounterStack.js";
import DecrementCounterStack from "./DecrementCounterStack.js";
import TabBarIcon from "../components/TabBarIcon";
import {colors} from "../helpers/colors.js"

const BottomTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: colors.black,
            borderTopWidth: 0,
          },
        }}
      >
        <BottomTab.Screen
          name="Increase"
          component={IncrementCounterStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="atom" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Decrease"
          component={DecrementCounterStack}
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
