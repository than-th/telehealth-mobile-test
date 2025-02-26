import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import {RootStackParamList} from './navigation';
import {navigationRef} from './navigationRef';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoute = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoute;
