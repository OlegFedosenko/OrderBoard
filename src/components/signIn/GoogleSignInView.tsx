import React from 'react';
import { Button, View } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signOutGoogle } from '../../services/googleSignIn';
import { signInWithGoogle } from '../../store/session';
import { useAsyncRequest } from '../hooks/useAsyncRequest';

const GoogleSignInView = () => {
  const { makeRequest } = useAsyncRequest(signInWithGoogle);
  const logOut = async () => {
    await signOutGoogle();
  };
  const signIn = async () => {
    await makeRequest();
  };
  return (
    <View>
      <GoogleSigninButton onPress={signIn} />
      <Button onPress={logOut} title={'SignOut'} />
    </View>
  );
};
export default GoogleSignInView;
