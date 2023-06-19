import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Text} from 'native-base';
import React, {useState} from 'react';
import PrimaryBtn from '../../components/common/primaryBtn';
import PrimaryInput from '../../components/common/primaryInput';
import Container from '../../components/layout/container';
import {AuthStackParamsList} from '../../navigation/auth';

type Props = NativeStackScreenProps<AuthStackParamsList, 'followSomeone'>;

const FollowSomeone: React.FC<Props> = ({navigation}) => {
  const [searchStr, setSearchStr] = useState<string>('');

  return (
    <Container backHasTitle title="Follow Someone">
      <Box flex={1} px="15px">
        <Text mt="10px">
          Follow someone you might know or you can follow them later
        </Text>
        <PrimaryInput
          placeholder="Search"
          value={searchStr}
          onChange={setSearchStr}
          extraStyles={{mt: '20px'}}
        />
        <PrimaryBtn
          title="Continue"
          extraBtnStyles={{mt: 'auto', rounded: 'full'}}
          onPress={() => navigation.navigate('tabs')}
        />
      </Box>
    </Container>
  );
};

export default FollowSomeone;
