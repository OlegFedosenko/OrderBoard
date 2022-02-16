export type RootState = {
  session: SessionState;
};
export type SessionState = {
  user: User | null;
  accessToken: string;
  idToken: string;
};
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  currency: string;
  address: string;
  phone: string;
  email: string;
  language: string;
  dateOfBirth: string;
};
