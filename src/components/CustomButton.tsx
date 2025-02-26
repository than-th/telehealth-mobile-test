import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import { Text } from './CustomText';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle, disabled && styles.disabledText, sharedStyle.fontBold]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 54,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: Colors.secondary,
  },
  disabledText: {
    color: Colors.primary,
  },
});

export default CustomButton;
