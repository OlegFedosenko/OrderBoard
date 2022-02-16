import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { combineEpics, ofType } from 'redux-observable';
import { pluck, switchMap } from 'rxjs';
import { LOGIN, SIGN_IN_GOOGLE, successAction } from '../actionTypes';
import { EpicType } from './types';

export const watchGoogleSignIn: EpicType = action$ =>
  action$.pipe(
    ofType(successAction(SIGN_IN_GOOGLE)),
    pluck('payload'),
    switchMap(async (data: any) => {
      const { user } = data;
      const { accessToken, idToken } = await GoogleSignin.getTokens();
      return { type: successAction(LOGIN), payload: { user, accessToken, idToken } };
    }),
  );

export default combineEpics(watchGoogleSignIn);
