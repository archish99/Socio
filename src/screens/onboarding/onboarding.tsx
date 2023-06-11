import {Box} from 'native-base';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import PrimaryBtn from '../../components/common/primaryBtn';
import OnboardingItem from '../../components/onboarding/onboardingItem';
import colors from '../../constants/common/colors';
import ONBOARDING_DATA from '../../constants/data/onboarding';

const Onboarding: React.FC = ({navigation}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleNext = () => {
    navigation.navigate('welcome');
  };

  return (
    <Box flex={1}>
      <Swiper
        loop={false}
        autoplay={false}
        activeDotColor={colors.primaryColor}
        dotStyle={{marginBottom: 100}}
        onIndexChanged={(idx: number) => setActiveIdx(idx)}
        activeDotStyle={{marginBottom: 100}}>
        {ONBOARDING_DATA.map(item => (
          <Box key={item.id} flex={1}>
            <OnboardingItem title={item.title} imgName={item.imgName} />
          </Box>
        ))}
      </Swiper>
      {activeIdx === ONBOARDING_DATA.length - 1 && (
        <Box alignItems="center">
          <PrimaryBtn
            title="Next"
            extraBtnStyles={{
              rounded: 'full',
              position: 'absolute',
              bottom: 50,
              w: '95%',
            }}
            onPress={handleNext}
          />
        </Box>
      )}
    </Box>
  );
};

export default Onboarding;
