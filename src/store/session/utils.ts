import { DAFAULT_CURRENCY, DAFAULT_LANGUAGE } from '../../data/constant';
import { User } from '../types';

type GoogleUser = {
  id: string;
  email: string;
  familyName: string;
  givenName: string;
};
export const transformGoogleUserDataToTamplateUser = (googleUser: GoogleUser): User => {
  const { id, email, familyName, givenName } = googleUser;
  return {
    id,
    email,
    firstName: givenName,
    lastName: familyName,
    currency: DAFAULT_CURRENCY,
    address: '',
    phone: '',
    language: DAFAULT_LANGUAGE,
    dateOfBirth: '',
  };
};
