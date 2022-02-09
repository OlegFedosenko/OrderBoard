import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const signInWithGoogle = async () => {
  try {
    GoogleSignin.configure();
    const userData = await GoogleSignin.signIn();
    console.log(userData);
  } catch (error) {
    console.log('google signin', error);
  }
};

export const signOutGoogle = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.log('google signin', error);
  }
};
