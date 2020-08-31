import * as React from "react";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Custom
import VideosStack from "./VideosStack.js";
import DownloadedStack from "./DownloadedStack.js";
import TabBarIcon from "../components/TabBarIcon";
import { colors } from "../helpers/colors.js";

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
          component={VideosStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="play-circle" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Decrease"
          component={DownloadedStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} name="file-download" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
