import React, { ReactNode } from 'react';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

const Screen: FC<ReactNode> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: colors.primaryGrean,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen;
