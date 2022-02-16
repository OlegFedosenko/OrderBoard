import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import HomeView from '../components/home/HomeView';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  const navigatorScreenOptions = {
    headerShown: false,
    headerMode: 'screen',
  };
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen name="home" component={HomeView} />
    </Stack.Navigator>
  );
};

export default HomeStack;
