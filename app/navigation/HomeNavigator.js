import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MyBooksScreen from "../screens/MyBooksScreen";
import HomeScreen from "../screens/HomeScreen";
import MyAuthorsScreen from "../screens/MyAuthorsScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator mode="modal">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="MyBooks" component={MyBooksScreen} />
    <AppStack.Screen name="Books" component={MyBooksScreen} />
    <AppStack.Screen name="MyAuthors" component={MyAuthorsScreen} />
  </AppStack.Navigator>
);

export default AuthNavigator;
