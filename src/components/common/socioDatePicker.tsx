import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {Box, HStack, Text} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

interface Props {
  isOpen: boolean;
  value: Date;
  onChange: (e: DateTimePickerEvent, d?: Date) => void;
  onClose: () => void;
  setDate: () => void;
}

const SocioDatePicker: React.FC<Props> = ({
  isOpen,
  value,
  onChange,
  onClose,
  setDate,
}) => {
  return (
    <>
      {isOpen && (
        <Box>
          {Platform.OS === 'ios' && (
            <HStack
              bg="white"
              alignItems="center"
              justifyContent="space-between"
              p="15px"
              mb="-5">
              <Text onPress={onClose} zIndex={999}>
                Cancel
              </Text>
              <Text
                onPress={() => {
                  setDate();
                  onClose();
                }}
                zIndex={999}>
                Confirm
              </Text>
            </HStack>
          )}
          <DateTimePicker
            value={value}
            mode="date"
            onChange={onChange}
            testID="datePicker"
            display="spinner"
          />
        </Box>
      )}
    </>
  );
};

export default SocioDatePicker;
