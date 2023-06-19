import {Box, HStack, Icon, Image, Pressable, Text} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../constants/common/colors';
import Comment from '../../common/comment';
import Like from '../../common/like';
import Save from '../../common/save';
import Share from '../../common/share';

interface Props {
  username: string;
  designation: string;
  postImg: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isSaved: boolean;
  profileImg: string;
  postDesc: string;
}

const Post: React.FC<Props> = ({
  username,
  designation,
  postImg,
  likeCount,
  commentCount,
  isLiked,
  isSaved,
  profileImg,
  postDesc,
}) => {
  return (
    <Box mb="15px">
      <HStack alignItems="center" justifyContent="space-between" mb="10px">
        <HStack alignItems="center">
          <Pressable _pressed={{opacity: 0.7}}>
            <Image
              source={{uri: profileImg}}
              w="30px"
              h="30px"
              rounded="full"
              mr="10px"
              alt="Profile Img"
            />
          </Pressable>
          <Box>
            <Text fontSize="13px" fontWeight={600}>
              {username}
            </Text>
            <Text fontSize="12px" color={colors.darkerGray} fontWeight={500}>
              {designation}
            </Text>
          </Box>
        </HStack>
        <Pressable
          borderWidth={1.2}
          borderColor={colors.darkGray}
          rounded="full"
          _pressed={{opacity: 0.7}}>
          <Icon
            as={MaterialCommunityIcons}
            name="dots-horizontal"
            size="20px"
            color={colors.darkGray}
          />
        </Pressable>
      </HStack>
      <Image
        source={{uri: postImg}}
        w="100%"
        h="300px"
        rounded="lg"
        resizeMode="cover"
        alt="Post"
      />
      <HStack mt="15px" alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <Like likeCount={likeCount} isLike={isLiked} />
          <Comment commentCount={commentCount} containerStyles={{ml: '20px'}} />
          <Share containerStyles={{ml: '20px'}} />
        </HStack>
        <Save isSaved={isSaved} />
      </HStack>
      <HStack mt="10px" alignItems="center">
        <Text fontSize="15px" fontWeight={600} mr="5px">
          {username}
        </Text>
        <Text fontSize="13px">{postDesc}</Text>
      </HStack>
    </Box>
  );
};

export default Post;
