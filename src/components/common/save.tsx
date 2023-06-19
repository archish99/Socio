import {IPressableProps, Icon, Pressable} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  isSaved?: boolean;
  containerStyles?: IPressableProps;
}

const Save: React.FC<Props> = ({isSaved, containerStyles}) => {
  return (
    <Pressable _pressed={{opacity: 0.7}} {...containerStyles}>
      <Icon
        as={MaterialCommunityIcons}
        name={isSaved ? 'bookmark-minus' : 'bookmark-minus-outline'}
        color="black"
        size="25px"
      />
    </Pressable>
  );
};

export default Save;
