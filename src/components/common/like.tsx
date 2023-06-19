import {IPressableProps, Icon, Pressable, Text} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/common/colors';

interface Props {
  likeCount: number;
  isLike: boolean;
  containerStyles?: IPressableProps;
}

const Like: React.FC<Props> = ({likeCount, isLike, containerStyles}) => {
  return (
    <Pressable
      alignItems="center"
      flexDir="row"
      _pressed={{opacity: 0.7}}
      {...containerStyles}>
      <Icon
        as={Ionicons}
        name={!isLike ? 'heart-outline' : 'heart'}
        size="25px"
        color={!isLike ? 'black' : colors.primaryColor}
        mr="5px"
      />
      <Text fontSize="14px" fontWeight={500}>
        {likeCount}
      </Text>
    </Pressable>
  );
};

export default Like;
