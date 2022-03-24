import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { combineEpics, ofType } from 'redux-observable';
import { pluck, switchMap, map } from 'rxjs';
import { LOGIN, SIGN_IN_GOOGLE, successAction } from '../actionTypes';
import { EpicType } from './types';

type GoogleUser = { email: string; familyName: string; givenName: string; id: string; name: string; photo: string };

export const watchGoogleSignIn: EpicType = action$ =>
  action$.pipe(
    ofType(successAction(SIGN_IN_GOOGLE)),
    pluck('payload', 'user'),
    switchMap(async (user: GoogleUser) => {
      const { accessToken, idToken } = await GoogleSignin.getTokens();
      return { user, accessToken, idToken };
    }),
    map((data: { user: GoogleUser; accessToken: string; idToken: string }) => ({
      type: successAction(LOGIN),
      payload: data,
    })),
  );

export default combineEpics(watchGoogleSignIn);
