import React from 'react';
import { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

type Props = {} & TextInputProps;

const Input: FC<Props> = ({ placeholder, onChangeText, value }) => {
  return <TextInput style={inputStyles.input} onChangeText={onChangeText} value={value} placeholder={placeholder} />;
};

const inputStyles = StyleSheet.create({
  input: {
    fontSize: fonts.mediumText,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 10,
  },
});

export default Input;
