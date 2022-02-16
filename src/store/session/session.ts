import { createSlice } from '@reduxjs/toolkit';
import { LOGIN, STOP_SESSION, successAction } from '../actionTypes';
import { SessionState } from '../types';
import { transformGoogleUserDataToTamplateUser } from './utils';

const initialState: SessionState = { user: null, accessToken: '', idToken: '' };

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {
    [successAction(LOGIN)]: (state, action) => {
      const { user, accessToken, idToken } = action.payload;
      state.user = transformGoogleUserDataToTamplateUser(user);
      state.accessToken = accessToken;
      state.idToken = idToken;
    },
    [STOP_SESSION]: state => {
      state.user = null;
      state.accessToken = '';
    },
  },
});

export default session.reducer;
