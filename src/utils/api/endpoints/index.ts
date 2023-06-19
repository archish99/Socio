import {login, signup} from './auth';
import {listCountries} from './misc';
import {updateUser} from './user';

const endpoints = {
  user: {
    signup,
    login,
    update: updateUser,
  },
  misc: {
    countries: {
      list: listCountries,
    },
  },
};

export default endpoints;
