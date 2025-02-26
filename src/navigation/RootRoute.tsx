import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DismissKeyboardWrapper from '../components/DismissKeyboardWrapper';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import { RootStackParamList } from './navigation';
import { navigationRef } from './navigationRef';

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
    <DismissKeyboardWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
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
    </DismissKeyboardWrapper>
  );
};

export default RootRoute;
