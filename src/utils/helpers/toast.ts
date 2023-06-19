import {Toast} from 'native-base';

const CustomToast = (type: 'error' | 'success', title: string) => {
  return Toast.show({
    title,
    placement: 'bottom',
    bg: type === 'error' ? 'red.500' : 'green.500',
    color: 'white',
  });
};

export default CustomToast;
