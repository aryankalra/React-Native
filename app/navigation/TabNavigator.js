import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import MyBooksScreen from "../screens/MyBooksScreen";
import NewBookScreen from "../screens/NewBookScreen";
import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import HomeNavigator from "./HomeNavigator";

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: AppColors.otherColor,
      activeBackgroundColor: AppColors.primaryColor,
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="home"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="Create"
      component={NewBookScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="plus-circle"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
    <AppTab.Screen
      name="Collection"
      component={MyBooksScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="book-open-variant"
            backgroundColor={AppColors.otherColor}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
