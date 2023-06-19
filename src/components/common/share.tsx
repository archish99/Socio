import {IPressableProps, Icon, Pressable} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  containerStyles?: IPressableProps;
}

const Share: React.FC<Props> = ({containerStyles}) => {
  return (
    <Pressable _pressed={{opacity: 0.7}} {...containerStyles}>
      <Icon
        as={Ionicons}
        name="paper-plane-outline"
        size="25px"
        color="black"
      />
    </Pressable>
  );
};

export default Share;
