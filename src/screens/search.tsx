import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Box} from 'native-base';
import React, {useState} from 'react';
import PrimaryInput from '../components/common/primaryInput';
import {BottomTabsParamsList} from '../navigation/tab';

type Props = BottomTabScreenProps<BottomTabsParamsList, 'search'>;

const Search: React.FC<Props> = () => {
  const [searchStr, setSearchStr] = useState<string>('');

  return (
    <Box flex={1} bg="white">
      <PrimaryInput
        placeholder="Search"
        value={searchStr}
        onChange={setSearchStr}
        extraStyles={{mt: '50px', mx: '15px'}}
      />
    </Box>
  );
};

export default Search;
