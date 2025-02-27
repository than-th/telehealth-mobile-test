import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashList } from '@shopify/flash-list';

import AddressIcon from '../assets/svg/AddressIcon';
import PersonIcon from '../assets/svg/PersonIcon';
import StarIcon from '../assets/svg/StarIcon';
import { Text } from '../components/CustomText';
import TopNavbar from '../components/TopNavbar';
import { Doctor } from '../models/doctor';
import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import { Category, useDoctorListViewModel } from '../viewmodels/DoctorListViewModel';

const Tab = createMaterialTopTabNavigator();

const DoctorList = ({
  status,
  doctors,
}: {
  status: 'online' | 'offline';
  doctors: Doctor[];
}) => {
  const filteredDoctors = doctors.filter(doctor => doctor.status === status);

  const renderDoctorCard = ({item}: {item: Doctor}) => {
    return (
      <TouchableOpacity
        style={tw`flex-row overflow-hidden rounded-lg items-center justify-end mx-6 mt-4 bg-white`}>
        <Image
          source={{uri: item.image}}
          style={tw`w-[33%] h-full absolute left-0`}
          resizeMode="cover"
        />
        <View style={tw`rounded-lg px-4 w-[70%] bg-white py-4 gap-2`}>
          <Text style={[tw`text-[${Colors.default}]`, sharedStyle.fontBold]}>
            {item.name}
          </Text>
          <View style={tw`flex-row items-center gap-2`}>
            <StarIcon />
            <Text>{item.rating}</Text>
            <PersonIcon />
            <Text>{item.tag}</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <AddressIcon />
            <Text>{item.address}</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            {item.badge &&
              item.badge.length > 0 &&
              item.badge.map((badge, index) => (
                <Image
                  key={index}
                  source={{uri: badge}}
                  style={tw`w-6 h-6 bg-[${Colors.lightGray}] rounded-full`}
                  resizeMode="contain"
                />
              ))}
            <View
              style={tw`w-10 h-6 rounded-lg items-center justify-center bg-[${Colors.lightGray}]`}>
              <Text style={tw`text-[${Colors.default}]`}>3+</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between gap-2`}>
            <Text style={[tw`text-[${Colors.default}]`, sharedStyle.fontBold]}>
              ค่าบริการเริ่มต้น
            </Text>
            <Text style={[tw`text-[${Colors.primary}]`, sharedStyle.fontBold]}>
              {item.price > 0 ? item.price + ' บาท' : 'ฟรี'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`flex-1 bg-[${Colors.secondary}]`}>
      <FlashList
        data={filteredDoctors}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={50}
        renderItem={renderDoctorCard}
      />
    </View>
  );
};

const DoctorListPage: React.FC = () => {
  const {
    filteredDoctors,
    selectedCategory,
    setCategory,
    categoryToThai,
    goBack,
  } = useDoctorListViewModel();

  return (
    <View style={tw`flex-1 bg-[${Colors.secondary}]`}>
      <TopNavbar
        title="ความดัน"
        leftIcon="chevron-back"
        rightIcon="search"
        onLeftPress={goBack}
        onRightPress={() => {}}
        iconSize={24}
      />

      {/* Filter */}
      <View style={tw`bg-white rounded rounded-lg pt-4 mt-5`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`px-6 py-2 bg-white`}>
          {(['All', 'Doctor', 'Dentist', 'Pharmacist'] as Category[]).map(
            category => (
              <TouchableOpacity
                key={category}
                style={[
                  tw`rounded-full mr-2 px-4 py-2 bg-[${Colors.secondary}]`,
                  selectedCategory === category && tw`bg-[${Colors.primary}]`,
                ]}
                onPress={() =>
                  setCategory(
                    category as 'All' | 'Doctor' | 'Dentist' | 'Pharmacist',
                  )
                }>
                <Text
                  style={[
                    tw`text-[${Colors.primary}]`,
                    selectedCategory === category && tw`text-white`,
                  ]}>
                  {categoryToThai[category]}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>

      {/* Top Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 3,
          },
          tabBarLabelStyle: {
            fontFamily: 'NotoSansThai-SemiBold',
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.empty,
        }}>
        <Tab.Screen name="พร้อมให้บริการ">
          {props => (
            <DoctorList {...props} status="online" doctors={filteredDoctors} />
          )}
        </Tab.Screen>

        <Tab.Screen name="ออฟไลน์">
          {props => (
            <DoctorList {...props} status="offline" doctors={filteredDoctors} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default DoctorListPage;
