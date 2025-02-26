import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import { Text } from '../components/CustomText';
import { Colors } from '../shared/style/Colors';

const HomePage: React.FC = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white w-full h-full`}>
      <Text style={tw`text-3xl my-4 text-[${Colors.primary}] border border-[${Colors.primary}] rounded-lg px-8 py-4`}>ยินดีต้อนรับ</Text>
    </View>
  );
};

export default HomePage;
