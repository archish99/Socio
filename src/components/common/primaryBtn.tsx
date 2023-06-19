import {Button, IButtonProps} from 'native-base';
import React from 'react';
import colors from '../../constants/common/colors';

interface Props {
  title: string;
  extraBtnStyles?: IButtonProps;
  onPress?: () => void;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  loading?: boolean;
}

const PrimaryBtn: React.FC<Props> = ({
  title,
  extraBtnStyles,
  onPress,
  disabled,
  leftIcon,
  loading,
}) => {
  return (
    <Button
      bg={colors.primaryColor}
      onPress={onPress}
      _pressed={{bg: colors.primaryColor, opacity: 0.7}}
      isDisabled={disabled}
      leftIcon={leftIcon}
      isLoading={loading}
      {...extraBtnStyles}>
      {title}
    </Button>
  );
};

export default PrimaryBtn;
