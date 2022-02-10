export type RootState = {
  session: SessionState;
};
export type SessionState = {
  user: object | null;
  accessToken: string;
};
