import {Button, IButtonProps} from 'native-base';
import React from 'react';
import colors from '../../constants/common/colors';

interface Props {
  title: string;
  extraBtnStyles?: IButtonProps;
  onPress?: () => void;
  disabled?: boolean;
  leftIcon?: JSX.Element;
}

const PrimaryBtn: React.FC<Props> = ({
  title,
  extraBtnStyles,
  onPress,
  disabled,
  leftIcon,
}) => {
  return (
    <Button
      bg={colors.primaryColor}
      onPress={onPress}
      _pressed={{bg: colors.primaryColor, opacity: 0.7}}
      isDisabled={disabled}
      leftIcon={leftIcon}
      {...extraBtnStyles}>
      {title}
    </Button>
  );
};

export default PrimaryBtn;
