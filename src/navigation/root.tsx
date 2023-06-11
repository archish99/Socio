import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Onboarding from '../screens/onboarding/onboarding';
import Welcome from '../screens/welcome';
import AuthNavigation, {AuthStackParamsList} from './auth';

export type RootStackParamsList = {
  onboarding: undefined;
  welcome: undefined;
  auth: NavigatorScreenParams<AuthStackParamsList>;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="auth" component={AuthNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
