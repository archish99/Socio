import {createAsyncThunk} from '@reduxjs/toolkit';
import endpoints from '../../utils/api/endpoints';
import network from '../../utils/api/network';

export const listCountriesThunk = createAsyncThunk(
  '/misc/countries',
  async () => {
    try {
      const res = await network.request.get({
        path: endpoints.misc.countries.list,
      });

      return res.response.data.countries;
    } catch (err: any) {
      console.error('ERROR:: ', err.message);
    }
  },
);
