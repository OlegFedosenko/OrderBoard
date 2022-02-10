import React, { FC } from 'react';
import GoogleSignInView from './GoogleSignInView';
import SignInForm from './SignInForm';

const SignInView: FC = () => {
  return (
    <>
      <SignInForm />
      <GoogleSignInView />
    </>
  );
};

export default SignInView;
