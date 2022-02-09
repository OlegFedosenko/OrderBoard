import React, { FC } from 'react';
import { Button } from 'react-native';
import Input from '../common/Input';
import Title from '../common/Title';
import FormInputsContainer from './FormInputsContainer';
import SignInFormContainer from './SignInFormContainer';

const SignInForm: FC = () => {
  return (
    <SignInFormContainer>
      <Title title={'SignIn'} />
      <FormInputsContainer>
        <Input placeholder={'email'} />
        <Input placeholder={'password'} />
      </FormInputsContainer>
      <Button title={'Login'} />
    </SignInFormContainer>
  );
};

export default SignInForm;
