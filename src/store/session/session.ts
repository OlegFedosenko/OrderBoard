import { createSlice } from '@reduxjs/toolkit';
import { LOGIN, STOP_SESSION, successAction } from '../actionTypes';
import { SessionState } from '../types';

const initialState: SessionState = { user: null, accessToken: '' };

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {
    [successAction(LOGIN)]: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.accessToken = 'accessToken';
    },
    [STOP_SESSION]: state => {
      state.user = null;
      state.accessToken = '';
    },
  },
});

export default session.reducer;
