import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Icon, Image, Text, VStack} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryBtn from '../components/common/primaryBtn';
import Container from '../components/layout/container';
import colors from '../constants/common/colors';
import {RootStackParamsList} from '../navigation/root';

type Props = NativeStackScreenProps<RootStackParamsList, 'welcome'>;

const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Box flex={1}>
        <Image
          source={require('../assets/images/welcome.png')}
          w="250px"
          h="250px"
          alt="welcome"
          mx="auto"
          mt="20px"
        />
        <Text
          fontSize="24px"
          fontWeight={600}
          textAlign="center"
          letterSpacing=".5px">
          Welcome
        </Text>
        <VStack my="20px" mx="20px" space="15px">
          <PrimaryBtn
            title="Continue with Facebook"
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="facebook"
                color={colors.facebookBlue}
                size="20px"
                mr="5px"
              />
            }
            extraBtnStyles={{
              bg: 'white',
              _text: {color: 'black'},
              borderWidth: 1,
              borderColor: colors.lightGray,
              rounded: 'xl',
              _pressed: {opacity: 0.7, bg: 'white'},
            }}
          />
          <PrimaryBtn
            title="Continue with Google"
            leftIcon={
              <Icon
                as={Ionicons}
                name="logo-google"
                color="black"
                size="20px"
                mr="5px"
              />
            }
            extraBtnStyles={{
              bg: 'white',
              _text: {color: 'black'},
              borderWidth: 1,
              borderColor: colors.lightGray,
              rounded: 'xl',
              _pressed: {opacity: 0.7, bg: 'white'},
            }}
          />
        </VStack>
        <Text textAlign="center">or</Text>
        <PrimaryBtn
          title="Sign in with password"
          extraBtnStyles={{rounded: 'full', my: '20px', mx: '20px'}}
          onPress={() => navigation.navigate('auth', {screen: 'login'})}
        />
        <Text textAlign="center" color={colors.darkGray} mt="10px">
          Don't have an account?{' '}
          <Text
            color={colors.primaryColor}
            onPress={() => navigation.navigate('auth', {screen: 'signup'})}>
            Sign up
          </Text>
        </Text>
      </Box>
    </Container>
  );
};

export default Welcome;
