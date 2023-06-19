import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import {
  Box,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import PrimaryBtn from '../../components/common/primaryBtn';
import PrimaryInput from '../../components/common/primaryInput';
import Container from '../../components/layout/container';
import colors from '../../constants/common/colors';
import {AuthStackParamsList} from '../../navigation/auth';
import {AppDispatch} from '../../redux/store';
import {signupThunk} from '../../redux/thunk/user';
import {signupSchema} from '../../utils/validation/schema/auth';

type Props = NativeStackScreenProps<AuthStackParamsList, 'signup'>;

const Signup: React.FC<Props> = ({navigation}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const formikProps = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (
      values: {
        email: string;
        password: string;
        confirmPassword: string;
      },
      helpers,
    ) => {
      setIsLoading(true);
      await dispatch(
        signupThunk({
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }),
      ).unwrap();
      setIsLoading(false);
      helpers.resetForm();
    },
  });

  const {values, touched, errors, handleChange, handleSubmit} = formikProps;

  return (
    <Container>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <Box flex={1} px="15px">
          <Text fontSize="24px" fontWeight={700} my="30px">
            Create your {'\n'}Account
          </Text>
          <VStack my="20px" space="15px">
            <FormControl
              isRequired
              isInvalid={!!touched.email && !!errors.email}>
              <PrimaryInput
                value={values.email}
                placeholder="Email"
                onChange={handleChange('email')}
                keyboardType="email-address"
              />
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!touched.password && !!errors.password}>
              <PrimaryInput
                value={values.password}
                placeholder="Password"
                onChange={handleChange('password')}
                type={showPassword ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShowPassword(prev => !prev)}>
                    <Icon
                      as={Ionicons}
                      name={showPassword ? 'eye' : 'eye-off'}
                      size="20px"
                      mr="10px"
                    />
                  </Pressable>
                }
              />
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!touched.confirmPassword && !!errors.confirmPassword}>
              <PrimaryInput
                value={values.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                InputRightElement={
                  <Pressable
                    onPress={() => setShowConfirmPassword(prev => !prev)}>
                    <Icon
                      as={Ionicons}
                      name={showConfirmPassword ? 'eye' : 'eye-off'}
                      size="20px"
                      mr="10px"
                    />
                  </Pressable>
                }
              />
              <FormControl.ErrorMessage>
                {errors.confirmPassword}
              </FormControl.ErrorMessage>
            </FormControl>
            <PrimaryBtn
              title="Sign Up"
              extraBtnStyles={{mt: '10px', rounded: 'full'}}
              disabled={
                !values.email || !values.password || !values.confirmPassword
              }
              onPress={handleSubmit}
              loading={isLoading}
            />
          </VStack>
          <Text my="20px" textAlign="center">
            Or continue with
          </Text>
          <HStack justifyContent="center" alignItems="center">
            <IconButton
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="facebook"
                  color={colors.facebookBlue}
                  size="20px"
                />
              }
              mr="10px"
              borderWidth={1}
              borderColor={colors.lightGray}
              _pressed={{bg: 'white', opacity: 0.7}}
            />
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="logo-google"
                  color="black"
                  size="20px"
                />
              }
              borderWidth={1}
              borderColor={colors.lightGray}
              _pressed={{bg: 'white', opacity: 0.7}}
            />
          </HStack>
          <Text textAlign="center" color={colors.darkGray} mt="20px">
            Already have an account?{' '}
            <Text
              color={colors.primaryColor}
              onPress={() => navigation.navigate('login')}>
              Login
            </Text>
          </Text>
        </Box>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Signup;
