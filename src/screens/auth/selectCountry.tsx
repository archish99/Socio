import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, FlatList} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PrimaryBtn from '../../components/common/primaryBtn';
import PrimaryInput from '../../components/common/primaryInput';
import Container from '../../components/layout/container';
import SelectCountryItem from '../../components/selectCountry/selectCountryItem';
import {AuthStackParamsList} from '../../navigation/auth';
import {AppDispatch, RootState} from '../../redux/store';
import {listCountriesThunk} from '../../redux/thunk/misc';
import {updateUser} from '../../redux/thunk/user';
import {CountryType} from '../../types/misc';

type Props = NativeStackScreenProps<AuthStackParamsList, 'selectCountry'>;

const SelectCountry: React.FC<Props> = ({navigation}) => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [countrySelected, setCountrySelected] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const userId = useSelector((state: RootState) => state.user.id);

  useEffect(() => {
    dispatch(listCountriesThunk())
      .unwrap()
      .then(res => {
        setCountries(res);
        setFilteredCountries(res);
      });
  }, []);

  const handleFilterCountries = (searchStr: string) => {
    if (searchStr.length === 0) {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter(item => item.name.includes(searchStr)),
      );
    }
  };

  const handleContinue = async () => {
    setIsLoading(true);
    await dispatch(
      updateUser({
        id: userId,
        country: countrySelected,
      }),
    ).unwrap();
    setIsLoading(false);
    navigation.navigate('profile');
  };

  return (
    <Container backHasTitle title="Select Your Country">
      <Box flex={1} px="15px">
        <PrimaryInput
          onChange={e => handleFilterCountries(e)}
          placeholder="Search"
          extraStyles={{mt: '15px'}}
        />
        <FlatList
          data={filteredCountries}
          renderItem={({item}) => (
            <SelectCountryItem
              name={item.name}
              code={item.code}
              image={item.emoji}
              isSelected={countrySelected === item.code}
              selectItem={() => setCountrySelected(item.code)}
            />
          )}
          keyExtractor={item => item.code}
          mt="10px"
        />
        <PrimaryBtn
          title="Continue"
          extraBtnStyles={{mt: 'auto', rounded: 'full'}}
          onPress={handleContinue}
          loading={isLoading}
        />
      </Box>
    </Container>
  );
};

export default SelectCountry;
