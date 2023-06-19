import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const useStore = () => {
  return useSelector((state: RootState) => state);
};

export default useStore;
