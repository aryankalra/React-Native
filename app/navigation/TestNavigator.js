import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Test1 from '../screens/Test1';
import Test2 from '../screens/Test2';



const AppStack =  createStackNavigator();


const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Test1" component={Test1}/>
        <AppStack.Screen name="Test2" component={Test2}/>
    </AppStack.Navigator>
)

export default AuthNavigator;