import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import TelehealthLogo from '../assets/svg/TelehealthLogo';
import CustomButton from '../components/CustomButton';
import { Text } from '../components/CustomText';
import CustomTextInput from '../components/CustomTextInput';
import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';

const LoginPage: React.FC = () => {
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
          onRawTextChange={()=>{}}
          required
        />
        <CustomButton
          title={'เข้าสู่ระบบ'}
          onPress={()=>{}}
        />
      </View>

      <View style={tw`flex-2 flex-row gap-2 items-center`}>
        <Text style={tw`text-lg`}>ยังไม่มีบัญชี ?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={tw`text-lg text-[${Colors.primary}]`}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
