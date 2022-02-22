import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigatorScreenOptions = {
  headerShown: false,
  headerMode: 'screen',
};
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen name="signIn" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
