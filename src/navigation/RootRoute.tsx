import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import {RootStackParamList} from './navigation';
import {navigationRef} from './navigationRef';
import {useEffect, useState} from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootRoute;
