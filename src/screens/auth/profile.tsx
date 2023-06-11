import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import {
  Box,
  FormControl,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-number-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrimaryBtn from '../../components/common/primaryBtn';
import PrimaryInput from '../../components/common/primaryInput';
import SocioDatePicker from '../../components/common/socioDatePicker';
import Container from '../../components/layout/container';
import colors from '../../constants/common/colors';
import {AuthStackParamsList} from '../../navigation/auth';
import {profileSchema} from '../../utils/validation/schema/auth';

type Props = NativeStackScreenProps<AuthStackParamsList, 'profile'>;

const Profile: React.FC<Props> = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [profileImageRes, setProfileImageRes] = useState<
    ImagePickerResponse | undefined
  >();

  const formikProps = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      dob: '',
      phoneNumber: '',
      occupation: '',
    },
    validationSchema: profileSchema,
    onSubmit: values => {
      console.log('values:: ', values);
      navigation.navigate('followSomeone');
    },
  });

  const {values, touched, errors, handleChange, handleSubmit, setFieldValue} =
    formikProps;

  const handleChooseProfileImg = async () => {
    try {
      const res = await launchImageLibrary({
        mediaType: 'photo',
      });

      setProfileImageRes(res);
    } catch (err) {
      console.error('ERROR:: ', err);
    }
  };

  return (
    <Container backHasTitle title="Fill Your Profile">
      <KeyboardAwareScrollView style={{flex: 1}}>
        <Box flex={1} px="15px">
          <Pressable
            mt="20px"
            mx="auto"
            w="100px"
            h="100px"
            onPress={handleChooseProfileImg}
            _pressed={{opacity: 0.7}}>
            <Image
              source={{
                uri:
                  profileImageRes &&
                  profileImageRes?.assets &&
                  profileImageRes?.assets.length > 0
                    ? profileImageRes.assets[0].uri
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
              w="full"
              h="full"
              rounded="full"
              alt="User img"
            />
            <Box
              bg={colors.primaryColor}
              w="20px"
              rounded="sm"
              p="2px"
              position="absolute"
              bottom={0}
              right={1}>
              <Icon as={MaterialIcons} name="edit" color="white" />
            </Box>
          </Pressable>
          <VStack mt="25px" space="20px">
            <FormControl
              isRequired
              isInvalid={!!touched.fullName && !!errors.fullName}>
              <PrimaryInput
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange('fullName')}
              />
              <FormControl.ErrorMessage>
                {errors.fullName}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!touched.username && !!errors.username}>
              <PrimaryInput
                placeholder="Username"
                value={values.username}
                onChange={handleChange('username')}
              />
              <FormControl.ErrorMessage>
                {errors.username}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!touched.dob && !!errors.dob}>
              <Pressable
                flexDir="row"
                bg={colors.lightGray}
                p="12px"
                rounded="xl"
                alignItems="center"
                onPress={() => setShowDatePicker(true)}
                _pressed={{opacity: 0.7}}>
                <Text
                  color={values.dob ? 'black' : '#b5b5b5'}
                  fontSize="15px"
                  w="90%">
                  {values.dob
                    ? new Date(values.dob).toLocaleDateString()
                    : 'Date of Birth'}
                </Text>
                <Icon as={Ionicons} name="md-calendar-outline" />
              </Pressable>
              <FormControl.ErrorMessage>{errors.dob}</FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!touched.phoneNumber && !!errors.phoneNumber}>
              <PhoneInput
                value={values.phoneNumber}
                onChangeFormattedText={handleChange('phoneNumber')}
                defaultCode="IN"
                containerStyle={{
                  width: '100%',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                textInputStyle={{
                  width: '100%',
                }}
                textContainerStyle={{
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                countryPickerButtonStyle={{
                  backgroundColor: colors.lightGray,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />
              <FormControl.ErrorMessage>
                {errors.phoneNumber}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!touched.occupation && !!errors.occupation}>
              <PrimaryInput
                placeholder="Occupation"
                value={values.occupation}
                onChange={handleChange('occupation')}
              />
              <FormControl.ErrorMessage>
                {errors.occupation}
              </FormControl.ErrorMessage>
            </FormControl>
            <PrimaryBtn
              title="Continue"
              extraBtnStyles={{mt: '10px', rounded: 'full'}}
              disabled={
                !values.fullName ||
                !values.username ||
                !values.dob ||
                !values.phoneNumber ||
                !values.occupation
              }
              onPress={handleSubmit}
            />
          </VStack>
        </Box>
      </KeyboardAwareScrollView>
      <SocioDatePicker
        isOpen={showDatePicker}
        value={date}
        onChange={(e, d) => (d ? setDate(d) : null)}
        onClose={() => setShowDatePicker(false)}
        setDate={() => setFieldValue('dob', date)}
      />
    </Container>
  );
};

export default Profile;
