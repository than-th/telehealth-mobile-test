import React, { useState } from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

import { Colors } from '../shared/style/Colors';
import { Text } from './CustomText';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  required?: boolean;
  type?: 'text' | 'idcard';
  onRawTextChange?: (rawText: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  errorMessage,
  required,
  type = 'text',
  style,
  ...props
}) => {
  const [isFormatted, setIsFormatted] = useState<boolean>(true);
  function startsWithNumber(text: string) {
    if (text.length === 0) {
      return true;
    }
    return /^\d/.test(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} {required && <Text>*</Text>}
      </Text>

      <MaskedTextInput
        mask={type === 'idcard' && isFormatted ? '9-99999-9999-99-9' : ''}
        onChangeText={(text, rawText) => {
          if (startsWithNumber(rawText)) {
            setIsFormatted(true);
          } else {
            setIsFormatted(false);
          }
          console.log(text, '|', rawText);
          if (props.onRawTextChange) {
            props.onRawTextChange(rawText);
          }
        }}
        style={[styles.input, style]}
        placeholder={label}
        {...props}
      />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    borderColor: Colors.textField,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'NotoSansThai-Regular',
    color: Colors.default,
    height: 54,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomTextInput;
