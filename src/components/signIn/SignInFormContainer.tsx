import React, { ReactNode } from 'react';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import metrics from '../../theme/metrics';

const SignInFormContainer: FC<ReactNode> = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: 320,
    height: 400,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    borderRadius: metrics.borderRadius,
  },
});

export default SignInFormContainer;
