import {Box, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  title: string;
  imgName: any;
}

const OnboardingItem: React.FC<Props> = ({title, imgName}) => {
  const {width} = Dimensions.get('window');

  return (
    <Box flex={1} w={width}>
      <Image
        source={imgName}
        alt="idea"
        w="100%"
        h="500px"
        resizeMode="cover"
      />
      <Box bg="transparent" h="100px" mt="-90px">
        <Svg viewBox="0 0 1440 320">
          <Path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,138.7C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </Box>
      <Box flex={1} bg="white" mt="-10px">
        <Text textAlign="center" fontSize="20px" fontWeight="700">
          {title}
        </Text>
        <Text fontSize="16px" textAlign="center" mt="10px" w="90%" mx="auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </Text>
      </Box>
    </Box>
  );
};

export default OnboardingItem;
