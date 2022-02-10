import { RootState } from '../types';

export const accessToken = (state: RootState) => state.session.accessToken;
