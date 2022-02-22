import { GoogleSignin } from '@react-native-google-signin/google-signin';
import settings from '../../settings.json';

const { webClientId } = settings;
GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId,
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

export const signInWithGoogle = () => GoogleSignin.signIn();

export const signOutGoogle = () => GoogleSignin.signOut();
