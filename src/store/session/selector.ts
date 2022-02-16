import { RootState } from '../types';

export const accessToken = (state: RootState) => state.session.accessToken;
export const user = (state: RootState) => state.session.user;
