import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootSwitchNavigator from './RootSwitchNavigator';

function Navigator() {
  return (
    <NavigationContainer>
      <RootSwitchNavigator />
    </NavigationContainer>
  );
}

export default Navigator;
