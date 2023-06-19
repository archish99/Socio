import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignUpInputType, UpdateUserInputType} from '../../types/user';
import endpoints from '../../utils/api/endpoints';
import network from '../../utils/api/network';
import NavigationService from '../../utils/helpers/navigationService';
import CustomToast from '../../utils/helpers/toast';
import {
  setUserAccessToken,
  setUserCountry,
  setUserEmail,
  setUserId,
  setUserProfile,
} from '../slices/userSlice';

export const signupThunk = createAsyncThunk(
  '/user/signup',
  async (body: SignUpInputType, {dispatch}) => {
    try {
      const res = await network.request.post({
        path: endpoints.user.signup,
        auth: false,
        body,
      });

      dispatch(setUserEmail(body.email));
      dispatch(setUserAccessToken(res.response.data.token));
      dispatch(setUserId(res.response.data.id));
      NavigationService.navigate('selectCountry');
    } catch (err: any) {
      console.error('ERROR:: ', err.message);
      CustomToast('error', err.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  '/user/login',
  async (body: {email: string; password: string}, {dispatch}) => {
    try {
      const res = await network.request.post({
        path: endpoints.user.login,
        auth: false,
        body,
      });

      if (res.success) {
        dispatch(setUserId(res.response.data.id));
        dispatch(setUserAccessToken(res.response.data.token));
        dispatch(setUserEmail(res.response.data.email));
        dispatch(
          setUserProfile({
            country: res.response.data.country,
            fullName: res.response.data.fullName,
            phoneNumber: res.response.data.phoneNumber,
            dob: res.response.data.dob,
            occupation: res.response.data.occupation,
            username: res.response.data.username,
          }),
        );
        if (!res.response.data.isProfileCompleted) {
          NavigationService.navigate('profile');
        } else {
          NavigationService.navigate('tabs');
        }
      }
    } catch (err: any) {
      console.error('ERROR:: ', err.message);
      CustomToast('error', err.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  '/user/update',
  async (body: UpdateUserInputType, {dispatch}) => {
    try {
      const res = await network.request.post({
        path: endpoints.user.update,
        body,
      });

      console.log('Res:: ', res.response.data);

      dispatch(setUserCountry(res.response.data.country));
    } catch (err: any) {
      console.error('ERROR:: ', err.message);
      CustomToast('error', err.message);
      throw err;
    }
  },
);
