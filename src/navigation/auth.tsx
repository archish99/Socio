import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FollowSomeone from '../screens/auth/followSomeone';
import Login from '../screens/auth/login';
import Profile from '../screens/auth/profile';
import SelectCountry from '../screens/auth/selectCountry';
import Signup from '../screens/auth/signup';

export type AuthStackParamsList = {
  login: undefined;
  signup: undefined;
  selectCountry: undefined;
  profile: undefined;
  followSomeone: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="selectCountry" component={SelectCountry} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="followSomeone" component={FollowSomeone} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
