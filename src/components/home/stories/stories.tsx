import {ScrollView} from 'native-base';
import React from 'react';
import Story from './story';

const Stories: React.FC = () => {
  return (
    <ScrollView
      horizontal
      mt="20px"
      showsHorizontalScrollIndicator={false}
      maxH="100px"
      mb="20px">
      <Story isAddStory />
      <Story username="User" />
      <Story username="User" />
      <Story username="User" />
      <Story username="User" />
      <Story username="User" />
    </ScrollView>
  );
};

export default Stories;
