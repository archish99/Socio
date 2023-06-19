import {Flex, Icon, Image, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../constants/common/colors';

interface Props {
  isStoryViewed?: boolean;
  isAddStory?: boolean;
  username?: string;
}

const Story: React.FC<Props> = ({
  isStoryViewed = false,
  isAddStory = false,
  username,
}) => {
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false);

  return (
    <>
      {!isAddStory ? (
        <Pressable
          h="65px"
          _pressed={{opacity: 0.7}}
          onPress={() => setIsStoryOpen(true)}>
          <LinearGradient
            colors={[
              isStoryViewed ? colors.darkGray : colors.primaryColor,
              isStoryViewed ? colors.lightGray : colors.primaryColorLight,
            ]}
            style={{
              height: 65,
              width: 65,
              borderRadius: 999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              padding: 0,
            }}>
            <Pressable w="60px" h="60px">
              <Image
                source={{
                  uri: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
                }}
                w="100%"
                h="100%"
                alt="Profile Img"
                rounded="full"
              />
            </Pressable>
          </LinearGradient>
          <Text fontSize="12px" textAlign="center">
            {username}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          h="60px"
          _pressed={{opacity: 0.7}}
          onPress={() => setIsStoryOpen(true)}>
          <Pressable w="60px" h="60px" mr="10px" mt="2px" position="relative">
            <Image
              source={{
                uri: 'https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg',
              }}
              w="100%"
              h="100%"
              alt="Profile Img"
              rounded="full"
            />
            <Flex
              justifyContent="center"
              alignItems="center"
              w="18px"
              h="18px"
              rounded="md"
              position="absolute"
              bottom={0}
              right={0}
              bg={colors.primaryColor}>
              <Icon as={AntDesign} name="plus" color="white" size="15px" />
            </Flex>
          </Pressable>
          <Text fontSize="12px" textAlign="center" mt="3px">
            You
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default Story;
