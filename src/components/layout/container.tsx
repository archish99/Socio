import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Icon, Pressable, Text} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  children: React.ReactNode;
  backHasTitle?: boolean;
  title?: string;
}

const Container: React.FC<Props> = ({children, backHasTitle, title}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Box flex={1} bg="white">
        <HStack px="5px" pt="10px" mb="10px" alignItems="center">
          <Pressable
            onPress={() => navigation.goBack()}
            _pressed={{opacity: 0.7}}>
            <Icon as={Ionicons} name="arrow-back" size="xl" />
          </Pressable>
          {backHasTitle && (
            <Text ml="10px" fontSize="18px" fontWeight={600}>
              {title}
            </Text>
          )}
        </HStack>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Container;
