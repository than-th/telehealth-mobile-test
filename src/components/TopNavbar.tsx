import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Text } from './CustomText';

interface TopNavbarProps {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftPress?: (event: GestureResponderEvent) => void;
  onRightPress?: (event: GestureResponderEvent) => void;
  iconSize?: number;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  iconSize = 24,
}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.navbarContainer}>

      <View style={styles.leftButtonContainer}>
        {leftIcon ? (
          <TouchableOpacity onPress={onLeftPress}>
            <Icon name={leftIcon} size={iconSize} />
          </TouchableOpacity>
        ) : null}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightButtonContainer}>
        {rightIcon ? (
          <TouchableOpacity onPress={onRightPress}>
            <Icon name={rightIcon} size={iconSize} />
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  leftButtonContainer: {
    flex: 1,
  },
  rightButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    flex: 3,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
});

export default TopNavbar;
