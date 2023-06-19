import {IPressableProps, Icon, Pressable, Text} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  commentCount: number;
  containerStyles?: IPressableProps;
}

const Comment: React.FC<Props> = ({commentCount, containerStyles}) => {
  return (
    <Pressable
      alignItems="center"
      flexDir="row"
      _pressed={{opacity: 0.7}}
      {...containerStyles}>
      <Icon as={AntDesign} name="message1" size="22px" mr="5px" color="black" />
      <Text fontSize="14px" fontWeight={500}>
        {commentCount}
      </Text>
    </Pressable>
  );
};

export default Comment;
