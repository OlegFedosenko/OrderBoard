import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { RootStackParamList } from './types';
import HomeStack from './HomeStack';
import { accessToken as getAccessToken } from '../store/session/selector';
import { useSelector } from 'react-redux';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const navigatorScreenOptions = {
  headerShown: false,
  headerMode: 'screen',
};

const RootSwitchNavigator: FC = () => {
  const accessToken = useSelector(getAccessToken);

  return (
    <RootStack.Navigator screenOptions={navigatorScreenOptions}>
      {!accessToken ? (
        <RootStack.Screen name="login" component={AuthStack} />
      ) : (
        <RootStack.Screen name="application" component={HomeStack} />
      )}
    </RootStack.Navigator>
  );
};
export default RootSwitchNavigator;
