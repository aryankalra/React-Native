
import React from 'react';
import { StyleSheet, View } from 'react-native';


import HomeScreen from './app/screens/HomeScreen';
import MyAuthorsScreen from './app/screens/MyAuthorsScreen';
import MyBooksScreen from './app/screens/MyBooksScreen';
import NewBookScreen from './app/screens/NewBookScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';

import TestNavigator from './app/navigation/TestNavigator';




export default function App() {
  return (  

    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
 

  );
}

const styles = StyleSheet.create({

  
})


