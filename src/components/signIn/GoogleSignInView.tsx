import React from 'react';
import { View } from 'react-native';
import { signInWithGoogle } from '../../store/session';
import { useAsyncRequest } from '../hooks/useAsyncRequest';
import GoogleSigninButtonView from './GoogleSigninButtonView';

const GoogleSignInView = () => {
  const { makeRequest, loading } = useAsyncRequest(signInWithGoogle);
  const signIn = async () => {
    await makeRequest();
  };
  const isDisabled = loading;
  return (
    <View>
      <GoogleSigninButtonView onPress={signIn} disabled={isDisabled} />
    </View>
  );
};
export default GoogleSignInView;
