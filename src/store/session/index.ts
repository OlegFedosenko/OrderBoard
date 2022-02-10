import { signInWithGoogle as signInWithGoogleRequest } from '../../services/googleSignIn';
import { LOGIN } from '../actionTypes';
import makeThunkAsyncRequest from '../operators/makeThunkAsyncRequest';

export const signInWithGoogle = makeThunkAsyncRequest(signInWithGoogleRequest, LOGIN);
