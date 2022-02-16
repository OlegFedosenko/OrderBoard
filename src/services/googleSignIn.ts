import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const signInWithGoogle = () => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '256566704096-6v7etev9u06g3l99llps9n0mvv5nmjkv.apps.googleusercontent.com',
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });
  return GoogleSignin.signIn();
};

export const signOutGoogle = () => {
  return GoogleSignin.signOut();
};
