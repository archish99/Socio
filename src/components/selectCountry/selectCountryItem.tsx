import {Box, HStack, Pressable, Text} from 'native-base';
import React from 'react';
import colors from '../../constants/common/colors';

interface Props {
  name: string;
  image: string;
  code: string;
  isSelected: boolean;
  selectItem: () => void;
}

const SelectCountryItem: React.FC<Props> = ({
  name,
  image,
  code,
  isSelected,
  selectItem,
}) => {
  return (
    <Pressable
      p="5px"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      rounded="lg"
      borderWidth={1}
      borderColor={colors.darkGray}
      mb="10px"
      onPress={selectItem}
      _pressed={{opacity: 0.7}}>
      <HStack alignItems="center">
        <Text fontSize="30px" mr="10px">
          {image}
        </Text>
        <Text fontSize="12px" mr="10px" color={colors.darkerGray}>
          {code}
        </Text>
        <Text fontSize="15px">{name}</Text>
      </HStack>
      <Box
        w="15px"
        h="15px"
        rounded="full"
        borderWidth={1}
        borderColor={colors.primaryColor}
        alignItems="center"
        justifyContent="center"
        mr="5px">
        {isSelected && (
          <Box w="10px" h="10px" rounded="full" bg={colors.primaryColor} />
        )}
      </Box>
    </Pressable>
  );
};

export default SelectCountryItem;
