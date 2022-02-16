import React, { FC } from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  disabled: boolean;
};

const GoogleSigninButtonView: FC<Props> = ({ onPress, disabled }) => {
  return <GoogleSigninButton onPress={onPress} style={styles.button} size={1} disabled={disabled} />;
};

const styles = StyleSheet.create({
  button: { width: 260, height: 50 },
});

export default GoogleSigninButtonView;
