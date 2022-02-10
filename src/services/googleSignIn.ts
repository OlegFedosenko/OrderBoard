import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const signInWithGoogle = () => {
  GoogleSignin.configure();
  return GoogleSignin.signIn();
};

export const signOutGoogle = () => {
  return GoogleSignin.signOut();
};
