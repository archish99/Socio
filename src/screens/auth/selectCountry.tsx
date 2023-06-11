import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box} from 'native-base';
import React, {useState} from 'react';
import PrimaryBtn from '../../components/common/primaryBtn';
import PrimaryInput from '../../components/common/primaryInput';
import Container from '../../components/layout/container';
import {AuthStackParamsList} from '../../navigation/auth';

type Props = NativeStackScreenProps<AuthStackParamsList, 'selectCountry'>;

const SelectCountry: React.FC<Props> = ({navigation}) => {
  const [searchStr, setSearchStr] = useState<string>('');

  return (
    <Container backHasTitle title="Select Your Country">
      <Box flex={1} px="15px">
        <PrimaryInput
          value={searchStr}
          onChange={e => setSearchStr(e)}
          placeholder="Search"
          extraStyles={{mt: '15px'}}
        />
        <PrimaryBtn
          title="Continue"
          extraBtnStyles={{mt: 'auto', rounded: 'full'}}
          onPress={() => navigation.navigate('profile')}
        />
      </Box>
    </Container>
  );
};

export default SelectCountry;
