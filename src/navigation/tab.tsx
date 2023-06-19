import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/common/colors';
import Home from '../screens/home';
import Search from '../screens/search';

export type BottomTabsParamsList = {
  home: undefined;
  search: undefined;
  shorts: undefined;
  profile: undefined;
};

const TabStack = createBottomTabNavigator<BottomTabsParamsList>();

const Tab: React.FC = () => {
  return (
    <TabStack.Navigator screenOptions={{headerShown: false}}>
      <TabStack.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? colors.primaryColor : colors.darkGray}
              size="5"
              mt="10px"
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              fontSize="12px"
              color={focused ? colors.primaryColor : colors.darkGray}>
              Home
            </Text>
          ),
        }}
      />
      <TabStack.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              as={Ionicons}
              name={focused ? 'search' : 'search-outline'}
              color={focused ? colors.primaryColor : colors.darkGray}
              size="5"
              mt="10px"
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              fontSize="12px"
              color={focused ? colors.primaryColor : colors.darkGray}>
              Search
            </Text>
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default Tab;
