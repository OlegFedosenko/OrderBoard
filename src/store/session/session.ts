import { createSlice } from '@reduxjs/toolkit';
import { SessionState } from '../types';

const initialState: SessionState = { user: null };

export const session = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default session.reducer;
