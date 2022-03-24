import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithGoogle as signInWithGoogleRequest } from '../../services/googleSignIn';
import { SIGN_IN_GOOGLE, STOP_SESSION } from '../actionTypes';
import makeThunkAsyncRequest from '../operators/makeThunkAsyncRequest';

export const signInWithGoogle = createAsyncThunk(SIGN_IN_GOOGLE, makeThunkAsyncRequest(signInWithGoogleRequest));

export const signOut = createAction(STOP_SESSION);
