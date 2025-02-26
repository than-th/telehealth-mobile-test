import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import TelehealthLogo from '../assets/svg/TelehealthLogo';
import CustomButton from '../components/CustomButton';
import { Text } from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import useLoginViewModel from '../viewmodels/LoginViewModel';

const LoginPage: React.FC = () => {
  const {setIdCard, isLoading, isButtonEnabled, errorMessage, handleLogin} =
    useLoginViewModel();

  return (
    <View style={tw`flex-1 items-center bg-white`}>
      <View style={tw`flex-2 justify-end pb-12`}>
        <TelehealthLogo />
      </View>

      <View style={tw`flex-1 items-center justify-center w-full px-6`}>
        <Text style={[tw`text-lg my-4`, sharedStyle.fontBold]}>
          เข้าสู่ระบบเพื่อใช้งาน
        </Text>
        <CustomTextInput
          label={'เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง'}
          type="idcard"
          onRawTextChange={setIdCard}
          required
        />
        <CustomButton
          title={'เข้าสู่ระบบ'}
          onPress={handleLogin}
          disabled={!isButtonEnabled || isLoading}
        />
        {errorMessage ? (
          <Text style={tw`text-red-500`}>{errorMessage}</Text>
        ) : (
          <Text />
        )}
      </View>

      <View style={tw`flex-2 flex-row gap-2 items-center`}>
        <Text style={tw`text-lg`}>ยังไม่มีบัญชี ?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={tw`text-lg text-[${Colors.primary}]`}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={Colors.primary}
          style={tw`absolute items-center justify-center w-full h-full bg-white opacity-50`}
        />
      )}
    </View>
  );
};

export default LoginPage;
