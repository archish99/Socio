import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Box, HStack, Icon, ScrollView, Text} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../components/home/feed/feed';
import Stories from '../components/home/stories/stories';
import {BottomTabsParamsList} from '../navigation/tab';

type Props = BottomTabScreenProps<BottomTabsParamsList, 'home'>;

const Home: React.FC<Props> = () => {
  return (
    <Box flex={1} bg="white" px="15px">
      <HStack mt="50px" alignItems="center" justifyContent="space-between">
        <Text fontSize="24px" fontWeight={700}>
          Socio
        </Text>
        <HStack alignItems="flex-start">
          <Icon as={Ionicons} name="heart-outline" size="25px" mr="15px" />
          <Icon as={AntDesign} name="message1" size="20px" />
        </HStack>
      </HStack>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Stories />
        <Feed />
      </ScrollView>
    </Box>
  );
};

export default Home;
