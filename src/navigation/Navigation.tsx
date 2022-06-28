import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTheme from '../utils/theme/AppTheme';
import StackNagigator from './StackNavigator';

const Navigation = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <StackNagigator />
    </NavigationContainer>
  );
};

export default Navigation;
