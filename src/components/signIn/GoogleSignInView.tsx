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
  return (
    <View>
      <GoogleSigninButtonView onPress={signIn} disabled={loading} />
    </View>
  );
};
export default GoogleSignInView;
