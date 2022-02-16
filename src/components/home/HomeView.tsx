import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOutGoogle } from '../../services/googleSignIn';
import { signOut } from '../../store/session';
import { user as getUser } from '../../store/session/selector';

const HomeView: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logOut = async () => {
    await signOutGoogle();
    dispatch(signOut());
  };
  const name = user?.firstName;

  return (
    <View>
      <Text>Home</Text>
      <Text>{`Hi! ${name}`}</Text>
      <Button onPress={logOut} title={'SignOut'} />
    </View>
  );
};

export default HomeView;
