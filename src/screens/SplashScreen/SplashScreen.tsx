import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import TelehealthLogo from '../../assets/svg/TelehealthLogo';

export default function SplashScreen() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View
        style={tw`flex-1 items-center justify-center bg-white w-full h-full`}>
        <TelehealthLogo />
      </View>
    </>
  );
}
