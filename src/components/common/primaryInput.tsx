import {IInputProps, Input} from 'native-base';
import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import colors from '../../constants/common/colors';

interface Props {
  value?: string;
  onChange: (e: string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  extraStyles?: IInputProps;
  type?: 'text' | 'password';
  InputRightElement?: JSX.Element;
}

const PrimaryInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
  keyboardType = 'default',
  type = 'text',
  extraStyles,
  InputRightElement,
}) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      keyboardType={keyboardType}
      fontSize="15px"
      bg={colors.lightGray}
      borderColor="transparent"
      py="12px"
      rounded="xl"
      type={type}
      _focus={{bg: colors.primaryColorLight, borderColor: colors.primaryColor}}
      InputRightElement={InputRightElement}
      {...extraStyles}
    />
  );
};

export default PrimaryInput;
