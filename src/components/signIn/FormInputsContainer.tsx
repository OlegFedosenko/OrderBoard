import React, { ReactNode } from 'react';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const FormInputsContainer: FC<ReactNode> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
});

export default FormInputsContainer;
